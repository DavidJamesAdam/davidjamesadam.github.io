import { NextResponse } from "next/server";

export const revalidate = 60 * 30;

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  twitter_username: string | null;
  created_at: string;
};

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
};

type GraphQlPinnedRepoNode = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
  } | null;
};

type GraphQlResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: GraphQlPinnedRepoNode[];
      };
    };
  };
  errors?: Array<{ message: string }>;
};

const pinnedReposQuery = `
  query($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if (!username) {
      return NextResponse.json(
        { error: "GITHUB_USERNAME is not set" },
        { status: 500 }
      );
    }

    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const [userRes, reposRes, graphQlRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&type=owner`,
        {
          headers,
          next: { revalidate },
        }
      ),
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: pinnedReposQuery,
          variables: { login: username },
        }),
        next: { revalidate },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub REST data" },
        { status: 502 }
      );
    }

    const user = (await userRes.json()) as GitHubUser;
    const repos = (await reposRes.json()) as GitHubRepo[];

    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    const topRepos = [...repos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5)
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        pushedAt: repo.pushed_at,
      }));

    const languageTotals = repos.reduce<Record<string, number>>((acc, repo) => {
      if (!repo.language) {
        return acc;
      }

      acc[repo.language] = (acc[repo.language] ?? 0) + 1;
      return acc;
    }, {});

    const languages = Object.entries(languageTotals)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    let pinnedRepos: Array<{
      id: string;
      name: string;
      description: string | null;
      url: string;
      stars: number;
      forks: number;
      language: string | null;
    }> = [];

    if (token && graphQlRes.ok) {
      const graphQlData = (await graphQlRes.json()) as GraphQlResponse;

      if (!graphQlData.errors?.length) {
        pinnedRepos =
          graphQlData.data?.user?.pinnedItems?.nodes?.map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.url,
            stars: repo.stargazerCount,
            forks: repo.forkCount,
            language: repo.primaryLanguage?.name ?? null,
          })) ?? [];
      }
    }

    return NextResponse.json({
      name: user.name,
      bio: user.bio,
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
      company: user.company,
      blog: user.blog,
      location: user.location,
      twitterUsername: user.twitter_username,
      createdAt: user.created_at,
      publicRepos: user.public_repos,
      publicGists: user.public_gists,
      followers: user.followers,
      following: user.following,
      totalStars,
      totalForks,
      topRepos,
      languages,
      pinnedRepos,
    });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
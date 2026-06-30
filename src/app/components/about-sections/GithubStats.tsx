"use client";

import { useEffect, useState } from "react";

type TopRepo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  pushedAt: string;
};

type LanguageStat = {
  name: string;
  count: number;
};

type PinnedRepo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: string | null;
};

type GitHubStats = {
  name: string | null;
  bio: string | null;
  avatarUrl: string;
  profileUrl: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  twitterUsername: string | null;
  createdAt: string;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  topRepos: TopRepo[];
  languages: LanguageStat[];
  pinnedRepos: PinnedRepo[];
};

export function GeneralInfo({ stats }: { stats: GitHubStats }) {
  return (
    <div>
      <p className="mb-1">cat ./generalInfo.txt</p>
      <p className="px-5">Public Repos: {stats.publicRepos}</p>
      <p className="px-5">Followers: {stats.followers}</p>
      <p className="px-5">Following: {stats.following}</p>
      <p className="px-5">Total Stars: {stats.totalStars}</p>
      <p className="px-5">Total Forks: {stats.totalForks}</p>
    </div>
  );
}

export function TopRepoInfo({ firstTopRepo }: { firstTopRepo: TopRepo }) {
  return (
    <div>
      <p className="mb-1">&gt; cat ./topRepository.txt</p>
      {firstTopRepo ? (
        <div className="px-5">
          <a
            href={firstTopRepo.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--primary-text)]"
          >
            <u> {firstTopRepo.name} </u>
          </a>{" "}
          <p>{firstTopRepo.description ?? "No description"}</p>{" "}
          <p>Language: {firstTopRepo.language ?? "Unknown"}</p>{" "}
          <p>
            Stars: {firstTopRepo.stars} | Forks: {firstTopRepo.forks}
          </p>{" "}
        </div>
      ) : (
        <p>No repositories found.</p>
      )}{" "}
    </div>
  );
}

export function LanguagesInfo({ stats }: { stats: GitHubStats }) {
  return (
    <div>
      <p className="mb-1">&gt; cat ./languages.txt</p>

      {stats.languages.map((language) => (
        <p className="px-5" key={language.name}>
          {language.name}: {language.count} repos
        </p>
      ))}
    </div>
  );
}

export function useGithubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadStats() {
      try {
        const response = await fetch("/api/github-stats");
        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub stats (${response.status})`);
        }

        const data = (await response.json()) as GitHubStats;
        if (active) {
          setStats(data);
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadStats();

    return () => {
      active = false;
    };
  }, []);
  return { stats, loading, error };
}

export default function GithubStats() {
  const { stats, loading, error } = useGithubStats();

  if (loading) {
    return <p>Loading GitHub stats...</p>;
  }

  if (error) {
    return <p>Could not load GitHub stats: {error}</p>;
  }

  if (!stats) {
    return null;
  }

  const firstTopRepo = stats.topRepos[0];

  return (
    <>
      <GeneralInfo stats={stats} />
      <TopRepoInfo firstTopRepo={firstTopRepo} />
      <LanguagesInfo stats={stats} />
    </>
  );
}

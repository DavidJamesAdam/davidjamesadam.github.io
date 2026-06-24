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

export default function GithubStats() {
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
        console.log(data);
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
    <div className="flex md:flex-row flex-col h-full justify-around text-lg">
      <div className="">
        <p>Public Repos: {stats.publicRepos}</p>
        <p>Followers: {stats.followers}</p>
        <p>Following: {stats.following}</p>
        <p>Total Stars: {stats.totalStars}</p>
        <p>Total Forks: {stats.totalForks}</p>
      </div>

      {/* <div>
    <h3>Pinned Repositories</h3>
    <ul>
      {stats.pinnedRepos.map((repo) => (
        <li className="border" key={repo.id}>
          <a href={repo.url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
          <p>{repo.description ?? "No description"}</p>
          <p>Language: {repo.language ?? "Unknown"}</p>
          <p>Stars: {repo.stars} | Forks: {repo.forks}</p>
        </li>
      ))}
    </ul>
  </div> */}
      {/*
  <div>
    <h3>Top Repositories</h3>
    <ul>
      {stats.topRepos.map((repo) => (
        <li className="border" key={repo.name}>
          <a href={repo.url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
          <p>{repo.description ?? "No description"}</p>
          <p>Language: {repo.language ?? "Unknown"}</p>
          <p>Stars: {repo.stars} | Forks: {repo.forks}</p>
        </li>
      ))}
    </ul>
  </div> */}

      <div>
        {" "}
        <h3>Top Repository</h3>{" "}
        {firstTopRepo ? (
          <div className="px-5">
            {" "}
            <a href={firstTopRepo.url} target="_blank" rel="noreferrer" className="hover:text-[var(--primary-text)]">
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

      <div>
        <h3>Languages</h3>
        <ul>
          {stats.languages.map((language) => (
            <li className="px-5" key={language.name}>
              {language.name}: {language.count} repos
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

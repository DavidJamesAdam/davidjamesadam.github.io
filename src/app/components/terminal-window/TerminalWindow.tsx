"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";
import { useGithubStats } from "../about-sections/GithubStats";
import useTypewriter from "@/app/utils/TypedText";

export default function TerminalWindow() {
  const windowContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const { stats, loading, error } = useGithubStats();
  const info = ["General", "TopRepo", "Languages"];
  const [minimize, setMinimize] = useState(false);

  const generalInfoText =
    !loading && stats
      ? [
          "cat ./generalInfo.txt",
          `  Public Repos: ${stats.publicRepos}`,
          `  Followers: ${stats.followers}`,
          `  Following: ${stats.following}`,
          `  Total Stars: ${stats.totalStars}`,
          `  Total Forks: ${stats.totalForks}`,
          "> ",
        ].join("\n")
      : "";

  const topRepoText =
    !loading && stats?.topRepos[0]
      ? [
          "cat ./topRepository.txt",
          `  ${stats.topRepos[0].name}`,
          `  ${stats.topRepos[0].description ?? "No description"}`,
          `  Language: ${stats.topRepos[0].language ?? "Unknown"}`,
          `  Stars: ${stats.topRepos[0].stars} | Forks: ${stats.topRepos[0].forks}`,
          "> ",
        ].join("\n")
      : "";

  const languagesText =
    !loading && stats
      ? [
          "cat ./languages.txt",
          ...stats.languages.map((l) => `  ${l.name}: ${l.count} repos`),
          "> ",
        ].join("\n")
      : "";
  const textsBySection = [generalInfoText, topRepoText, languagesText];
  const currentText = textsBySection[activeSection];

  const [command, ...contentLines] = currentText.split("\n");
  const content = contentLines.join("\n");

  const words = useMemo(() => (command ? [command] : []), [command]);
  const typedCommand = useTypewriter(words, 2000, 130);
  const isCommandDone =
    typedCommand.length === command.length && command.length > 0;

  const [showContent, setShowContent] = useState(false);
  const [prevCommand, setPrevCommand] = useState(command);

  if (prevCommand !== command) {
    setPrevCommand(command);
    setShowContent(false);
  }

  useEffect(() => {
    if (!isCommandDone) return;
    const id = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(id);
  }, [isCommandDone]);

  const captureWindowState = () => {
    const windowElement =
      windowContainerRef.current?.querySelector('[role="dialog"]');

    if (!windowElement) {
      return;
    }

    const transform = window.getComputedStyle(windowElement).transform;

    if (!transform || transform === "none") {
      return;
    }
  };

  const handleMinimize = () => {
    captureWindowState();
    setMinimize(!minimize);
  };

  return (
    <div className="flex flex-col bg-black/80 overflow-hidden my-5">
      <div className="flex flex-row justify-between border p-2">
        {info.map((section, index) => (
          <div key={index}>
            <button
              className={`hover:text-[var(--primary-text)] ${
                index === activeSection ? "text-[#bc77e7]" : ""
              }`}
              onClick={() => setActiveSection(index)}
            >
              <h3>{section}</h3>
            </button>
          </div>
        ))}
        <button onClick={handleMinimize}>
          <Image
            src="/minimize.svg"
            alt="Minimize button"
            className="white w-5"
            width={10}
            height={10}
          />
        </button>
      </div>
      <div
        className={
          minimize ? "h-0 overflow-hidden" : "flex-1 overflow-y-auto border p-5"
        }
      >
        {activeSection === 0 && (
          <>
            <div>
              <p className="whitespace-pre-wrap">
                &gt; {typedCommand}
                {showContent && "\n" + content}
                <span className="blinking-text">|</span>
              </p>
            </div>
          </>
        )}
        {activeSection === 1 && (
          <>
            <p className="whitespace-pre-wrap">
              &gt; {typedCommand}
              {showContent && "\n" + content}
              <span className="blinking-text">|</span>
            </p>
          </>
        )}
        {activeSection === 2 && (
          <>
            <p className="whitespace-pre-wrap">
              &gt; {typedCommand}
              {showContent && "\n" + content}
              <span className="blinking-text">|</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

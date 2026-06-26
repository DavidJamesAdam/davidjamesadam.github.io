"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import "./styles.css";
import {
  useGithubStats,
  GeneralInfo,
  TopRepoInfo,
  LanguagesInfo,
} from "../about-sections/GithubStats";

export default function TerminalWindow() {
  const windowContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  const { stats, loading, error } = useGithubStats();
  const info = ["General", "TopRepo", "Languages"];
  const [minimize, setMinimize] = useState(false);


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
    <div className="flex h-2/3 md:mx-5 md:w-1/3 w-full flex-col bg-black/80 overflow-hidden">
      <div className="flex flex-row justify-between border p-2">
        {info.map((section, index) => (
          <div key={index}>
            <button
              onClick={() => setActiveSection(index)}
              className="btn-reset"
            >
              {section}
            </button>
          </div>
        ))}
        <button onClick={handleMinimize} className="btn-reset">
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
          <div>{stats && <GeneralInfo stats={stats} />}</div>
        )}
        {activeSection === 1 && (
          <div>{stats && <TopRepoInfo firstTopRepo={stats.topRepos[0]} />}</div>
        )}
        {activeSection === 2 && (
          <div>{stats && <LanguagesInfo stats={stats} />}</div>
        )}
      </div>
    </div>
  );
}

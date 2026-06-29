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
            <div>{stats && <GeneralInfo stats={stats} />}</div>
            <p>
              &gt; <span className="blinking-text">|</span>
            </p>
          </>
        )}
        {activeSection === 1 && (
          <>
            <div>
              {stats && <TopRepoInfo firstTopRepo={stats.topRepos[0]} />}
            </div>
            <p>
              &gt; <span className="blinking-text">|</span>
            </p>
          </>
        )}
        {activeSection === 2 && (
          <>
            <div>{stats && <LanguagesInfo stats={stats} />}</div>
            <p>
              &gt; <span className="blinking-text">|</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

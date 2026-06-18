"use client";

import TerminalWindow from "../components/terminal-window/TerminalWindow";
import SideBar from "../components/side-bar/SideBar";
import { useEffect, useRef, useState } from "react";
import AboutMe from "../components/about-sections/AboutMe";
import Education from "../components/about-sections/Education";
import Interests from "../components/about-sections/Interests";

const line1 = "EXPLORING THE INTERFACE";
const line2 = "OF THE";
const unknown = " UNKNOWN";
const chars1 = [...line1];
const chars2 = [...line2];
const chars3 = [...unknown];
const allChars = [...chars1, ...chars2, ...chars3];

export default function Page() {
  const Symbols = [
    { symbol: "/Summoning.svg" },
    { symbol: "/Grimoire.svg" },
    { symbol: "/Binding.svg" },
  ];
  const totalChars = allChars.length;
  const [activeSection, setActiveSection] = useState(0);
  const [converted, setConverted] = useState<boolean[]>(
    Array(totalChars).fill(false),
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runningRef = useRef(true);
  const validIndicesRef = useRef<number[]>([]);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    validIndicesRef.current = allChars
      .map((char, i) => (char.trim() === "" ? null : i))
      .filter((i): i is number => i !== null);
  }, []);

  useEffect(() => {
    runningRef.current = true;
    const randomGlitching = () => {
      if (!runningRef.current) return;

      const pool = validIndicesRef.current;

      timeoutRef.current = setTimeout(
        () => {
          const index = pool[Math.floor(Math.random() * pool.length)];

          setConverted((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });

          setTimeout(
            () => {
              setConverted((prev) => {
                const next = [...prev];
                next[index] = false;
                return next;
              });

              randomGlitching();
            },
            randomIntFromInterval(150, 250),
          );
        },
        randomIntFromInterval(2000, 5000),
      );
    };

    randomGlitching();

    return () => {
      runningRef.current = false;
      clearTimer();
    };
  }, []);

  return (
    <div className="flex md:flex-row flex-col flex-1 min-h-0 py-5 md:overflow-hidden">
      <div className="flex flex-col md:w-1/2 w-full shrink-0">
        <h1 className="weathered-effect text-6xl md:text-8xl pb-5">
          EXPLORING THE INTERFACE
          <br />
          OF THE <span className="text-[#faf60c]">UNKNOWN</span>
        </h1>
        <div className="py-5">
          <TerminalWindow />
        </div>
      </div>
      <main className="flex flex-col gap-8 md:flex-1 md:min-h-0 md:justify-between">
        <div className="md:flex-1 md:min-h-0 md:overflow-y-auto">
          {activeSection === 0 && <AboutMe />}
          {activeSection === 1 && <Education />}
          {activeSection === 2 && <Interests />}
        </div>
        <div className="pl-5 py-5 flex flex-row justify-around md:shrink-0">
          {Symbols.map((symbol, index) => (
            <SideBar
              key={index}
              symbol={symbol.symbol}
              onClick={() => setActiveSection(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

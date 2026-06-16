"use client";

import Image from "next/image";
import TerminalWindow from "../components/terminal-window/TerminalWindow";
import SideBar from "../components/side-bar/SideBar";
import { useState } from "react";
import AboutMe from "../components/about-sections/AboutMe";
import Education from "../components/about-sections/Education";
import Interests from "../components/about-sections/Interests";

export default function Page() {
  const [activeSection, setActiveSection] = useState(0);
  const Symbols = [
    { symbol: "/Summoning.svg" },
    { symbol: "/Grimoire.svg" },
    { symbol: "/Binding.svg" },
  ];

  return (
    <div className="flex flex-row flex-1 my-5">
      <div className="flex flex-col w-1/2">
        <h1 className="weathered-effect text-8xl pb-5">
          EXPLORING THE INTERFACE
          <br />
          OF THE <span className="text-[#faf60c]">UNKNOWN</span>
        </h1>
        <TerminalWindow />
      </div>
      <main className="flex flex-col gap-8 flex-1 justify-between">
        {/* <Image
          src="/profilePicture.jpg"
          alt="Profile Picture"
          style={{
            objectFit: "cover",
            borderRadius: "100px",
          }}
          width={500}
          height={38}
          priority
        /> */}
        <div>
          {activeSection === 0 && <AboutMe />}
          {activeSection === 1 && <Education/>}
          {activeSection === 2 && <Interests/>}
        </div>
        <div className="pl-5 flex flex-row justify-around">
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

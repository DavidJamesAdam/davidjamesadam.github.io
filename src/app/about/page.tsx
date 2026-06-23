"use client";

// import TerminalWindow from "../components/terminal-window/TerminalWindow";
import SideBar from "../components/side-bar/SideBar";
import { useState } from "react";
import AboutMe from "../components/about-sections/AboutMe";
import Education from "../components/about-sections/Education";
import Interests from "../components/about-sections/Interests";

export default function Page() {
  const Symbols = [
    { symbol: "/Summoning.svg", section: "About" },
    { symbol: "/Grimoire.svg", section: "Education & Skills"  },
    { symbol: "/Binding.svg", section: "Interests"  },
  ];
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="flex md:flex-row flex-col flex-1 min-h-0 py-5 md:overflow-hidden">
      <div className="flex flex-col md:w-1/3 w-full shrink-0">
        <h1 className="weathered-effect text-6xl md:text-8xl pb-5">
          EXPLORING THE INTERFACE
          <br />
          OF THE <span className="text-[#faf60c]">UNKNOWN</span>
        </h1>
        {/* <div className="py-5">
          <TerminalWindow />
        </div> */}
      </div>
      <main className="flex flex-col gap-8 md:flex-1 md:min-h-0 md:justify-between">
        <div className="md:flex-1 md:min-h-0 md:overflow-y-auto">
          {activeSection === 0 && <AboutMe />}
          {activeSection === 1 && <Education />}
          {activeSection === 2 && <Interests />}
        </div>
        <div className="md:pl-5 pb-5 flex flex-row justify-around md:shrink-0">
          {Symbols.map((symbol, index) => (
            <SideBar
              key={index}
              symbol={symbol.symbol}
              onClick={() => setActiveSection(index)}
              section={symbol.section}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

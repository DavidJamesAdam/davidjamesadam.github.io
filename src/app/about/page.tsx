"use client";

// import TerminalWindow from "../components/terminal-window/TerminalWindow";
import SideBar from "../components/side-bar/SideBar";
import { useState } from "react";
import AboutMe from "../components/about-sections/AboutMe";
import Education from "../components/about-sections/Education";
import Interests from "../components/about-sections/Interests";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";

export default function Page() {
  const Symbols = [
    { symbol: "/Summoning.svg", section: "About" },
    { symbol: "/Grimoire.svg", section: "Education & Skills" },
    { symbol: "/Binding.svg", section: "Interests" },
  ];
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="page-wrapper">
      <HeaderWrapper
        title={
          <>
            EXPLORING THE INTERFACE
            <br />
            OF THE <span className="text-[#faf60c]">UNKNOWN</span>
            <span className="blinking-text">_</span>
          </>
        }
      />
      <section>
        <div className="md:flex-1 md:min-h-0 md:overflow-y-auto">
          {activeSection === 0 && <AboutMe />}
          {activeSection === 1 && <Education />}
          {activeSection === 2 && <Interests />}
        </div>
        <div className="md:pl-5 p-5 flex flex-row justify-around md:shrink-0">
          {Symbols.map((symbol, index) => (
            <SideBar
              key={index}
              symbol={symbol.symbol}
              onClick={() => setActiveSection(index)}
              section={symbol.section}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

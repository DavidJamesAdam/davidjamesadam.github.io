"use client";

import SideBar from "../components/side-bar/SideBar";
import { useState } from "react";
import AboutMe from "../components/about-sections/AboutMe";
import Education from "../components/about-sections/Education";
import Interests from "../components/about-sections/Interests";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";
import ContentSection from "../components/contentSection/ContentSection";

export default function AboutContent() {
  const Symbols = [
    { symbol: "/Summoning.svg", section: "About" },
    { symbol: "/Grimoire.svg", section: "Education & Skills" },
    { symbol: "/Binding.svg", section: "Interests" },
  ];
  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
      <HeaderWrapper
        title={
          <>
            EXPLORING THE INTERFACE
            <br />
            OF THE <span className="text-[#faf60c]">UNKNOWN</span>
          </>
        }
      />
      <ContentSection>
        <div className="md:flex-1 md:min-h-0 md:overflow-y-auto w-full">
          {activeSection === 0 && <AboutMe />}
          {activeSection === 1 && <Education />}
          {activeSection === 2 && <Interests />}
        </div>
        <div className="sidebar-style">
          {Symbols.map((symbol, index) => (
            <SideBar
              key={index}
              symbol={symbol.symbol}
              onClick={() => setActiveSection(index)}
              section={symbol.section}
              isActive={index === activeSection}
            />
          ))}
        </div>
      </ContentSection>
    </>
  );
}

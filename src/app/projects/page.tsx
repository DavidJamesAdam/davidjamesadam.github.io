"use client";
import { useState } from "react";
import Card from "../components/card/Card";
import SideBar from "../components/side-bar/SideBar";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";

export default function Page() {
  const [activeSection, setActiveSection] = useState(0);
  const projectInfo = [
    {
      picture: "/Placeholder.svg",
      title: "// Puppli",
      link: "https://github.com/DavidJamesAdam/cpsc513-project-puppli",
      description: "Dog picture voting webapp",
    },
    {
      picture: "/Placeholder.svg",
      title: "// SmartPantry",
      link: "https://github.com/DavidJamesAdam/cpsc471-project-SmartPantry",
      description: "Recipe, home inventory, and grocery tracker",
    },
    {
      video: "/RED_V1_demo.mp4",
      title: "// RED - Retro Entertainment Device",
      link: "https://github.com/DavidJamesAdam/RED-Retro-Entertainment-Device-",
      description: "Project",
    },
    {
      picture: "/Placeholder.svg",
      title: "// HIC - Hikers Information Companion",
      link: "https://github.com/DavidJamesAdam/HIC---The-Hiker-s-Information-Companion",
      description: "Project",
    },
    {
      picture: "/Placeholder.svg",
      title: "// Personal Backend Server (CRUD) project",
      link: "https://github.com/DavidJamesAdam/myFirstServer",
      description: "Project",
    },
    // {title: "Family History website", link: "https://github.com/DavidJamesAdam/family-history", description: "Project"},
  ];

  const activeProject = projectInfo[activeSection];

  const Symbols = [
    { symbol: "/PUPPLI.svg", section: "PUPPLI" },
    { symbol: "/SmartPantry.svg", section: "SmartPantry" },
    { symbol: "/RED.svg", section: "RED" },
    { symbol: "/HIC.svg", section: "HIC" },
    { symbol: "/SERVER.svg", section: "Express API" },
  ];

  return (
    <div className="page-wrapper">
      <HeaderWrapper
        title={
          <>
            SOME RECENT <span className="text-[#52f83c]">CREATIONS</span>
            <span className="blinking-text">_</span>
          </>
        }
      />
      <section>
        <div className="flex-1 flex items-center justify-center">
          <Card
            key={activeSection}
            picture={activeProject.picture}
            video={activeProject.video}
            title={activeProject.title}
            link={activeProject.link}
            description={activeProject.description}
          />
        </div>
        <div className="flex flex-row py-5 justify-around md:shrink-0">
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

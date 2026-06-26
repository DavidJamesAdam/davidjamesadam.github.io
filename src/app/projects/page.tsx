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
      //spell-checker:disable
      title: "// Puppli",
      techStack: [
        "Typescript",
        "React Router",
        "Material UI",
        "FastAPI",
        "Firebase",
      ],
      link: "https://github.com/DavidJamesAdam/cpsc513-project-puppli",
      description: "Dog picture voting webapp",
    },
    {
      picture: "/Placeholder.svg",
      title: "// SmartPantry",
      techStack: ["Typescript", "Next.js", "FastAPI", "PostgreSQL"],
      link: "https://github.com/DavidJamesAdam/cpsc471-project-SmartPantry",
      description: "Recipe, home inventory, and grocery tracker",
    },
    {
      video: "/HIC_demo.mp4",
      title: "// HIC - Hikers Information Companion",
      description: (
        <>
          <p className="indent-[2em]">
            This was my first personal project that I created while in school.
            And I&apos;ll be honest, it was challenging, but it was such a huge
            confidence boost when I was done. It was inspired by a former
            professor who enjoyed working with the Raspberry Pi and creating
            little gadgets for practical application. Additionally, during my
            music degree, I took a course called Electronics for Music
            Application, which taught us how to use the Arduino Uno to create
            devices for musical application. I remember having so much fun with
            that music class and exploring more electronics projects was always
            in the back of my mind. So during the Reading Break of that
            semester, I ordered a few parts and got to work.
          </p>
          <p className="indent-[2em]">
            Version One of this was pretty simple, as it only included AA
            batteries, the OLED screen, the Pico, and the BME280 sensor, but it
            felt like such a massive accomplishment. About a year later during
            my internship, I had wanted to integrate a rechargable Lithium Ion
            battery and a LiPo fuel gauge. Unfortunately, the documentation was
            pretty scarce on how to implement these things into my current
            project. That is where ChatGPT came in handy. It gave me a simple
            breakdown of what functions to use and helped my understand how the
            wiring functioned. As of right now, I don&apos;t plan on adding any
            extra features and might just polish up the visuals on the OLED. My
            next steps are to design a PCB board and enclosure for this, have it
            all printed out, and put it all together to test while I go for
            hikes.
          </p>
        </>
      ),
      learnt: (
        <p className="indent-[2em]">
          It was my first time really using Python for a practical application
          and my first time reading through API documentation. More than
          anything, this taught my how useful documentation is and how important
          it is to keep documentation updated
        </p>
      ),
      // spell-checker:disable
      techStack: ["Raspberry Pi Pico", "BME280", "LC079203 Fuel Gauge", "Circuit Python"],
      link: "https://github.com/DavidJamesAdam/HIC---The-Hiker-s-Information-Companion",
    },
    {
      video: "/RED_V1_demo.mp4",
      title: "// RED - Retro Entertainment Device",
      techStack: ["Raspberry Pi 4b", "Python"],
      link: "https://github.com/DavidJamesAdam/RED-Retro-Entertainment-Device-",
      description: "Project",
    },
    {
      picture: "/Placeholder.svg",
      title: "// Personal Backend Server (CRUD) project",
      techStack: ["Typescript", "Node Express"],
      link: "https://github.com/DavidJamesAdam/myFirstServer",
      description: "Project",
    },
    // {title: "Family History website", link: "https://github.com/DavidJamesAdam/family-history", description: "Project"},
  ];

  const activeProject = projectInfo[activeSection];

  const Symbols = [
    { symbol: "/PUPPLI.svg", section: "PUPPLI" },
    { symbol: "/SmartPantry.svg", section: "SmartPantry" },
    { symbol: "/HIC.svg", section: "HIC" },
    { symbol: "/RED.svg", section: "RED" },
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
      <section className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 min-h-0 flex items-start justify-center overflow-y-auto">
          <Card
            key={activeSection}
            picture={activeProject.picture}
            video={activeProject.video}
            title={activeProject.title}
            description={activeProject.description}
            learnt={activeProject.learnt}
            techStack={activeProject.techStack}
            link={activeProject.link}
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

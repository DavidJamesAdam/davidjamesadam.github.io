"use client";

import { useState } from "react";
import Card from "../components/card/Card";
import SideBar from "../components/side-bar/SideBar";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";
import Link from "next/link";
import ContentSection from "../components/contentSection/ContentSection";

export default function ProjectsContent() {
  const [activeSection, setActiveSection] = useState(0);
  const projectInfo = [
    {
      picture: "/Puppli_screenshot.png",
      //spell-checker:disable
      title: "// Puppli",
      description: (
        <>
          <p className="indent-[2em]">
            This is a website I helped work on in a web development class in my
            last year of school. PUPPLI is a social media platform where a user
            can create an account, create subprofiles for their dogs, create
            post that include pictures of their dogs, and vote on other
            user&apos;s dog pictures they like more. The group project had no
            restrictions in terms of what we could do, so we thought we would
            have fun with the idea. I primarily worked on the frontend with a
            bit of contribution on the backend. I also worked on the docker
            files (a requirement for the project). This was honestly a supper
            fun first website and I continued working on it after the class was
            over. I am not sure what my plans are for deployment yet, but it
            would be a fun thing to see people use.
          </p>
        </>
      ),
      learnt: (
        <p className="indent-[2em]">
          Thanks to my internship, which was primarily web development, I was
          fairly familiar on how to get the environment set up. However, this
          was my first real exposure to React, as I was primarily on the backend
          during my internship. I got to learn and strengthen my understanding
          of React fundementals such as compnents and state management. Since I
          also helped with the backend, I got to learn how FastAPI worked and
          how we comunicated with the Firebase database.
        </p>
      ),
      techStack: [
        "Typescript",
        "React Router",
        "Material UI",
        "FastAPI",
        "Firebase",
      ],
      link: "https://github.com/DavidJamesAdam/cpsc513-project-puppli",
    },
    {
      picture: "/SmartPantry_screenshot.png",
      title: "// SmartPantry",
      description: (
        <>
          <p className="indent-[2em]">
            This was the group project for my database class. Tracking recipes
            and ingredients compared to what someone might actually have can be
            tough to manage. SmartPantry helps to solve this by tracking all
            that for you including building grocery lists based on what
            ingredients you need for the recipes you would like to cook. I was
            primarily backend on this project with some contributions to the
            frontend near the end of the semester.
          </p>
        </>
      ),
      learnt: (
        <p className="indent-[2em]">
          Thanks to the principles we learnt in this database class, it was my
          first time creating a database from scratch. Creating the EERD and RM
          was not too difficult, however the database itself went through a few
          different iterations as I discovered what relations were actually
          needed and what made sense in practice. This project was nearly
          identical to my web development class, but this time I was primarily
          backend and there was more of a focus on building a robust database.
          Thanks to that web development class, I was pretty familiar with how
          FastAPI worked. However, since this database class focused on SQL, we
          were required to use SQL or PostgreSQL in our project. I decided to
          use{" "}
          <Link href="https://neon.com/">
            <u>Neon</u>
          </Link>{" "}
          for our database since it was free and easy to set up. Setting up the
          models in FastAPI and how to implement them in the end points was the
          biggest challenge. Thankfully, the documentation for FastAPI and
          Pydantic was detailed.
        </p>
      ),
      techStack: ["Typescript", "Next.js", "FastAPI", "PostgreSQL"],
      link: "https://github.com/DavidJamesAdam/cpsc471-project-SmartPantry",
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
            in the back of my mind. The HIC is meant to read atmospheric data
            (such as temperature, humidity, and pressure), and display it in a
            graphical form on a screen. So during the Reading Break of that
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
      techStack: [
        "Raspberry Pi Pico",
        "BME280",
        "LC079203 Fuel Gauge",
        "Circuit Python",
      ],
      link: "https://github.com/DavidJamesAdam/HIC---The-Hiker-s-Information-Companion",
    },
    {
      video: "/RED_V1_demo.mp4",
      title: "// RED - Retro Entertainment Device",
      description: (
        <>
          <p className="indent-[2em]">
            This was a bit of a follow-up to my HIC. I had developed the
            &quot;itch&quot; for electronics at this point. I had a touch screen
            designed to be used by the Raspberry Pi sitting around that I was
            having trouble thinking of things to do with. Eventually, I figured
            making my own gaming device would be a super fun idea to allow me to
            play retro games on the go. After a bit of research, I became
            inspired by{" "}
            <Link href="https://www.youtube.com/watch?v=gkook0l_gsM&t=1s">
              <u>Leandro Linares own game console project</u>
            </Link>
            . The way he was able to design his system to be incredibly sleek
            and functional really gave me the drive to see if I could figure
            this out on my own.
          </p>
          <p className="indent-[2em]">
            During winter break between semesters, I plunged down the rabbit
            hole to start my journey on creating something that would become one
            of my most proudest projects. It was far more challening than the
            HIC, namely due to discovering the Pi only accepts digital input. I
            had wanted to implement a analog joystick, so I needed to use an
            Analog to Digital Converter (ADC) in order for the Raspberry Pi to
            read signal from the joystick. This was definitely one of the
            hardest challenges coding wise. The other challenge was teaching
            myself Fusion 360 to design and print the enclosure. Right now, I
            have it deconstructed and have added a second joystick. I plan on
            redesigning the case to accomodate this new addition, and to improve
            on the erganomics of the enclosure itself.
          </p>
        </>
      ),
      learnt: (
        <p className="indent-[2em]">
          This was ended up being a more challenging project than I had
          initially expected, but it taught me so much. This my first real
          exposure to Linux and programming on a Linux machine. This was also
          the first time I used SSH using the Remote Explorer extension in
          VSCode to help write the script to allow the Pi to read input from the
          buttons. Additionally, I taught myself Fusion 360 to design the
          enclosure and learnt how to use a 3D printer to help print the
          enclosure.
        </p>
      ),
      techStack: ["Raspberry Pi 4b", "Linux", "Retro Pi", "Python"],
      link: "https://github.com/DavidJamesAdam/RED-Retro-Entertainment-Device-",
    },
    // {
    //   picture: "/Placeholder.svg",
    //   title: "// Personal Backend Server (CRUD) project",
    //   techStack: ["Typescript", "Node Express"],
    //   link: "https://github.com/DavidJamesAdam/myFirstServer",
    //   description: "Project",
    // },
    // {title: "Family History website", link: "https://github.com/DavidJamesAdam/family-history", description: "Project"},
  ];

  const activeProject = projectInfo[activeSection];

  const Symbols = [
    { symbol: "/PUPPLI.svg", section: "PUPPLI" },
    { symbol: "/SmartPantry.svg", section: "SmartPantry" },
    { symbol: "/HIC.svg", section: "HIC" },
    { symbol: "/RED.svg", section: "RED" },
    // { symbol: "/SERVER.svg", section: "Express API" },
  ];
  return (
    <>
      <HeaderWrapper
        title={
          <>
            SOME RECENT <span className="text-[#52f83c]">CREATIONS</span>
          </>
        }
      />
      <ContentSection>
        <div className="flex-1 min-h-0 flex items-start justify-center">
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

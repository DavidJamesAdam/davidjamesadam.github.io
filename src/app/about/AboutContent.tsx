"use client";

import Image from "next/image";
import SideBar from "../components/side-bar/SideBar";
import { useState } from "react";
import Education from "../components/about-sections/Education";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";
import ContentSection from "../components/contentSection/ContentSection";
import AboutCards from "../components/aboutCards/AboutCards";

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
          {activeSection === 0 && (
            <AboutCards title="// About me">
              <div className="pr-4 md:text-lg">
                <Image
                  src="/profilePicture2.jpg"
                  alt="Profile Picture"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="rounded-xl object-contain shrink-0 w-auto h-auto md:max-h-[36vh] max-h-[24vh] float-right ml-5 mb-5"
                />
                <p className="indent-[2em]">
                  Hi, I&apos;m David. I recently completed my BSc in Computer
                  Science from the University of Calgary, building on a previous
                  BA in Digital Audio Arts from the University of Lethbridge.
                  After graduating from the U of L, I started a career in the
                  corporate audio/visual industry, where I worked on large-scale
                  events such as conferences and conventions. However, I
                  discovered the A/V industry wasn&apos;t for me and I needed a
                  change. So, after discovering a passion for programming and
                  taking the steps I needed to to allow myself to enroll in the
                  Computer Science program at the University of Calgary, I
                  started my first semester in September of 2021.
                </p>
                <p className="indent-[2em]">
                  During my degree, I completed an internship with Gigadat
                  Solutions, where I gained experience in both quality assurance
                  and software development. While at Gigadat, I found myself
                  working on a project called{" "}
                  <u>
                    <a
                      href="https://unify.health/"
                      className="hover:text-[#bc77e7]"
                      target="_blank"
                    >
                      unify.health
                    </a>
                  </u>
                  , a health data management system for athletes. I developed an
                  email notification microservice using TypeScript and AWS, and
                  also worked on bug fixes and system improvements until the end
                  of my internship, at which point I had to ruefully say
                  farewell to everyone at Gigadat.
                </p>
                <p className="indent-[2em]">
                  Through my academic and personal projects, I’ve built
                  full-stack applications using technologies such as React,
                  FastAPI, PostgreSQL, and Docker. I’m particularly interested
                  in backend and full-stack development, with a focus on
                  building reliable, maintainable systems.
                </p>
              </div>
            </AboutCards>
          )}
          {activeSection === 1 && <Education />}
          {activeSection === 2 && (
            <AboutCards title="// Interests">
              <div className="flex flex-col md:block pr-4 md:text-lg">
                <Image
                  src="/David_and_Sauron_cropped.jpg"
                  alt="David and Sauron at Comic Expo"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="rounded-xl md:object-contain object-cover shrink-0 w-auto h-auto md:max-h-[36vh] max-h-[24vh] float-right ml-5 mb-5"
                />
                <p className="indent-[2em]">
                  I&apos;ve been described as a multi-faceted person with a wide range of interests, though at my core I&apos;m a bit of a nerd. Whether it&apos;s video games, books, movies, or technology, I enjoy anything that sparks curiosity. I&apos;ve been playing video games since I was a kid and still see them as one of the most compelling forms of interactive art. I&apos;m also an avid reader, primarily drawn to science fiction and fantasy, from Tolkien and Orwell to modern authors like Brandon Sanderson and Tamsyn Muir.
                </p>
                <p className="indent-[2em]">
                  That curiosity naturally extends into technology. I enjoy building practical gadgets with microcontrollers like the Raspberry Pi Pico and ESP32, and I find a lot of satisfaction in turning ideas into something tangible. For me, the only real limits are imagination and the tools available.
                </p>
                <p className="indent-[2em]">
                  Outside of technology, fitness is a big part of my life. Weightlifting is my go-to way to unwind, and there&apos;s something surprisingly meditative about putting on good music and moving heavy weights. I also enjoy hiking, and living in Calgary means the Rockies are never far away when I need to get outside.
                </p>
                <p className="indent-[2em]">
                  Music has been a lifelong passion as well. I studied music at the University of Lethbridge and have played guitar since I was a teenager, including several years in the local metal band{" "}
                  <u>
                    <a
                      href="https://www.balrogath.ca/"
                      target="_blank"
                      className="hover:text-[#bc77e7]"
                    >
                      Balrogoth
                    </a>
                  </u>.{" "}
                  While I chose not to pursue music professionally, it&apos;s still a defining part of who I am. Few things can match music&apos;s ability to evoke emotion, and I believe it&apos;s one of humanity&apos;s greatest forms of artistic expression.
                </p>
              </div>
            </AboutCards>
          )}
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

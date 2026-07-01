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
            <AboutCards title="About me">
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
            <AboutCards title="Interests">
              <div className="pr-4 md:text-lg">
                <Image
                  src="/David_and_Sauron_cropped.jpg"
                  alt="David and Sauron at Comic Expo"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="rounded-xl object-contain shrink-0 w-auto h-auto md:max-h-[36vh] max-h-[24vh] float-right ml-5 mb-5"
                />
                <p className="indent-[2em]">
                  I&apos;ve been called a very multi-faceted person with a wide
                  variety of interests I&apos;d definitely consider myself a
                  huge nerd first and foremost. Anything from video games, to
                  books, to movies, to technology. I have been playing video
                  games since I was very young and have not stopped. I believe
                  they are an incredible interactive art form that not a lot of
                  people seem to (or want to) understand. I&apos;m also a big
                  bookworm. I primarily gravitate towards Sci-fi and Fantasy.
                  Anything from the classics like Tolkien, to Orwell, to modern
                  writers such as Brandon Sanderson and Tamsyn Muir.
                </p>
                <p className="indent-[2em]">
                  My interests are not completely devoid of technology either.
                  I&apos;ve developed a habit over the years of wanting to build
                  my own technology; gadgets that serve a purpose. I love
                  working with microcontrollers such as the Raspberry Pi Pico
                  and the ESP 32. This really hits home my inclination to build
                  technology for practical purposes. When creating with
                  technology, I believe that someone is only limited to their
                  imagination and the technology available to them.
                </p>
                <p className="indent-[2em]">
                  I also have a passion for fitness and activity. The gym is
                  typically my &quot;bread and butter&quot; so to speak,
                  something that will easily scratch that &quot;I gotta get
                  out&quot; itch. There&apos;s something about throwing on some
                  of my favourite music and lifting heavy circles that I find so
                  meditative. Beyond that I also love hiking. Living in Calgary
                  has its benefit of being so close to the Rockies, allowing for
                  a quick jaunt out to some of my favourite trailheads.
                </p>
                <p className="indent-[2em]">
                  And lastly, I&apos;m a music lover and musician at heart. I
                  loved my time studying music at the University of Lethbridge,
                  but music as a career choice was not something for me. With
                  that being said, music will always be a part of who I am.
                  I&apos;ve been playing guitar since I was a teenager and I
                  used to play in a local metal band called{" "}
                  <u>
                    <a
                      href="https://www.balrogath.ca/"
                      target="_blank"
                      className="hover:text-[#bc77e7]"
                    >
                      Balrogoth
                    </a>
                  </u>{" "}
                  (who are still going strong and playing lots of shows!). I
                  believe music (along with many, many other art mediums) is the
                  closest thing we have to real world magic. The plethora of
                  emotions that music can evoke is something I&apos;ve always
                  found fascinating and I&apos;m so greatful music has had such
                  a positive impact on my life and who I am.
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

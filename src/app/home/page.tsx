import Image from "next/image";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";
import Socials from "../components/socials/Socials";
import TerminalWindow from "../components/terminal-window/TerminalWindow";
import { Metadata } from "next";
import ContentSection from "../components/contentSection/ContentSection";

export const metadata: Metadata = { title: "Home" };

export default function Page() {
  return (
    <>
      <HeaderWrapper
        title={
          <>
            Welcome,
            <br />
            I&apos;m David,
            <br />
            a weaver of
            <br />
            <span className="text-[var(--primary-text)]">
              Digital Realities
            </span>
          </>
        }
        subContent={
          <div>
            <div className="py-5 ">
              <h3>You can find me at:</h3>
              <Socials />
            </div>
          </div>
        }
      />
      <ContentSection>
        <h2 className="weathered-effect">{"// Summary"}</h2>
        <div className="flex flex-1 flex-col w-fit">
          <div className="m-5  md:text-lg">
            <p className="indent-[2em]">
              I&apos;m a fullstack developer and recent Computer Science
              graduate from the University of Calgary. During my degree, I
              completed a 15 month internship with Gigadat Solutions, working on
              both QA and backend teams. I&apos;ve worked with backend
              frameworks such as FastAPI, Express, and Fastify, frontend
              frameworks such as React Router and Next.js, and databases such as
              PostgreSQL. I&apos;m also an electronics hobbiest, making gadgets
              out of micro-controllers, and I&apos;m always picking away at my
              homelab.
            </p>
          </div>
          <div className="flex flex-1 md:flex-row flex-col md:m-auto w-full h-full">
            <div className="flex flex-1 flex-col w-full h-full">
              <h3>Github stats</h3>
              <TerminalWindow />
            </div>
            <div className="md:w-2/3 md:ml-5">
              <h3 className="md:mt-0 mt-5 mb-2">Github Contributions</h3>
              <Image
                src="https://ghchart.rshah.org/davidjamesadam"
                alt="GitHub Contributions Chart for GitHub user"
                className="w-full h-auto rounded bg-[#101214] mt-5"
                loading="lazy"
                height={10}
                width={10}
                unoptimized
              />
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}

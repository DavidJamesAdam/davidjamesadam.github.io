import Image from "next/image";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";
import Socials from "../components/socials/Socials";

export default function Page() {
  return (
    <div className="page-wrapper">
      <HeaderWrapper
        title={
          <>
            Welcome,
            <br />
            I&apos;m David,
            <br />
            a weaver of
            <br />
            <span className="text-[#faf60c]">Digital Realities</span>
            <span className="blinking-text">_</span>
          </>
        }
        subContent={<div className="p-5"><p>I&apos;m a recent Computer Science graduate from the University of Calgary. My main area of interest is fullstack development, with hobbies that include my homelab and building gadgets with micro-controllers.</p></div>}
      />
      <main>
        <div>
          <h2 className="weathered-effect">{"// Summary"}</h2>
          <div className="flex flex-col">
            <Image
              src="https://ghchart.rshah.org/davidjamesadam"
              alt="GitHub Contributions Chart for GitHub user"
              className="w-full h-auto rounded bg-[#101214]"
              loading="lazy"
              height={10}
              width={10}
              unoptimized
            />
            <h3>Socials</h3>
            <Socials />
          </div>
        </div>
      </main>
    </div>
  );
}

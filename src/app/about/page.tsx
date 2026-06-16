import Image from "next/image";
import TerminalWindow from "../components/terminal-window/TerminalWindow";
import SideBar from "../components/side-bar/SideBar";

export default function Page() {
  return (
    <div className="flex flex-col flex-1">
      {/* <SideBar symbol="/Grimoire.svg" /> */}
      <div className="flex flex-row w-full justify-between">
        <h1 className="weathered-effect text-8xl my-5">
          EXPLORING THE INTERFACE
          <br />
          OF THE <span className="text-[#faf60c]">UNKNOWN</span>
        </h1>
      </div>
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
        <div>
          <p>// About Me</p>
        </div>
        {/* <Image
          src="/profilePicture.jpg"
          alt="Profile Picture"
          style={{
            objectFit: "cover",
            borderRadius: "100px",
          }}
          width={500}
          height={38}
          priority
        /> */}
      </main>
      <footer className="row-start-3 flex items-center justify-center">
        <TerminalWindow />
      </footer>
    </div>
  );
}

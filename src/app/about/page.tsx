import Image from "next/image";
import TerminalWindow from "../components/terminal-window/TerminalWindow";

export default function Page() {
  return (
    <div className="flex flex-col flex-1">
      <h1 className="weathered-effect text-8xl my-5">
        EXPLORING THE INTERFACE
        <br/>
        OF THE <span className="text-[#faf60c]">UNKNOWN</span>
      </h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
        <TerminalWindow/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}

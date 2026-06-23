import Image from "next/image";
import * as motion from "motion/react-client";

export default function Page() {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 5,
  };
  return (
    <div className="flex md:flex-row flex-col flex-1 min-h-0 py-5 md:overflow-hidden">
      <div className="flex flex-col md:w-1/3 w-full shrink-0">
        <h1 className="weathered-effect text-6xl md:text-8xl pb-5">
          Hi, I&apos;m David. I&apos;m slowly uncovering aspects OF THE
          <span className="text-[#faf60c]">UNKNOWN</span>
        </h1>
        <div>
          <Image
            src="https://ghchart.rshah.org/davidjamesadam"
            alt="GitHub Contributions Chart for GitHub user"
            className="w-full h-auto rounded bg-[#101214]"
            loading="lazy"
            height={10}
            width={10}
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-1">
        <div>
          <h2>Summary</h2>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import HeaderWrapper from "../components/headerWrapper/HeaderWrapper";

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
            <span className="text-[#faf60c]">Digital Realities.</span>
          </>
        }
        subContent={
          <div className="p-5">
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
        }
      />
      <main>
        <div>
          <h2 className="weathered-effect">{'// Summary'}</h2>
        </div>
      </main>
    </div>
  );
}

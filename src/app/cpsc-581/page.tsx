import Image from "next/image";
import DavidButton from "../components/cpsc581-button/david-button";

export default function Page() {
  return (
    <div className="bg-[#8DA779] h-screen w-screen">
      <div className="justify-items-center">
        <Image
          src="/welcome.svg"
          alt="Profile Picture"
          style={{
            objectFit: "cover",
            borderRadius: "100px",
          }}
          width={500}
          height={38}
        />
      </div>
      <div className="mx-40">
        <h1>Group Project 1</h1>
        <div className="justify-items-start">
          <DavidButton />
        </div>
      </div>
    </div>
  );
}

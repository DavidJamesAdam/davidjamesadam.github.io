import Image from "next/image";
import DavidButton from "../components/cpsc581-button/david-button";
import "./styles.css";

export default function Page() {
  return (
    <div className="bg-[#8DA779] w-screen">
      <div className="justify-items-center mb-[10]">
        <Image
          src="/welcome.svg"
          alt="Welcome image"
          style={{
            objectFit: "cover",
            borderRadius: "100px",
          }}
          width={500}
          height={38}
        />
      </div>
      <div className="mx-[300] mb-[100]">
        <p className="splash-regular text-5xl mb-[20]">
          Initial Portfolio page design
        </p>
        <Image
          className="mb-[20]"
          src="/font_activity.jpg"
          alt="Results of the font activity"
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
          width={500}
          height={38}
        />
        <Image
          className="mb-[20]"
          src="/portfolio_activity.jpg"
          alt="Results of portfolio design activity"
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
          width={500}
          height={38}
        />
      </div>
      <div className="mx-[300] justify-items-end">
        <p className="splash-regular text-5xl  mb-[20]">Group Project 1</p>
        <Image
          className="mb-[20]"
          src="/Group_project_1.png"
          alt="Profile Picture"
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
          width={500}
          height={38}
        />
        <div>
          <DavidButton />
        </div>
      </div>
    </div>
  );
}

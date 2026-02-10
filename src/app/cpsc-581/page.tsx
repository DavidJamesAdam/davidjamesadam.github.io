import Image from "next/image";
import DavidButton from "../components/cpsc581-button/david-button";

export default function Page() {
  return (
    <div className="text-center">
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
      <div>
        <DavidButton />
      </div>
    </div>
  );
}

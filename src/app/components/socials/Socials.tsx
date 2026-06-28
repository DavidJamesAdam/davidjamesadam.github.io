import Image from "next/image";
import "./styles.css";

export default function Socials() {
  const iconDim = 40;
  return (
    <div className="weathered-effect flex flex-row flex-1 md:justify-normal justify-center">
      <a href="https://www.linkedin.com/in/davidjamesadam/" className="link">
        {" "}
        <Image
          src="/linkedin.svg"
          alt="LinkedIn icon"
          width={iconDim}
          height={iconDim}
          className="purple m-1"
        />
        LinkedIn
      </a>
      <a href="https://github.com/DavidJamesAdam" className="link">
        {" "}
        <Image
          src="/github-142.svg"
          alt="Github icon"
          width={iconDim}
          height={iconDim}
          className="purple m-1"
        />
        GitHub
      </a>
    </div>
  );
}

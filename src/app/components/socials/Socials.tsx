import Image from "next/image";
import "./styles.css";

export default function Socials() {
  const iconDim = 40;
  return (
    <div className="weathered-effect flex flex-row flex-1 md:justify-normal justify-center my-5">
      <a href="https://www.linkedin.com/in/davidjamesadam/" className="link" target="_blank">
        {" "}
        <Image
          src="/linkedin.svg"
          alt="LinkedIn icon"
          width={iconDim}
          height={iconDim}
          className="purple w-6 h-6 md:w-8 md:h-8"
        />
        LinkedIn
      </a>

      <a href="https://github.com/DavidJamesAdam" className="link" target="_blank">
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

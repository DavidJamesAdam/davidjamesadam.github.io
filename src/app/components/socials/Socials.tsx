import Image from "next/image";

export default function Socials() {
  const iconDim = 40;
  return (
    <div className="weathered-effect flex flex-row flex-1">
      <button>
        <Image
          src="/linkedin.svg"
          alt="LinkedIn icon"
          width={iconDim}
          height={iconDim}
          className="purple m-1"
        />
        <a href="https://www.linkedin.com/in/davidjamesadam/" className="m-1">LinkedIn</a>
      </button>
      <button>
        <Image
          src="/github-142.svg"
          alt="Github icon"
          width={iconDim}
          height={iconDim}
          className="purple m-1"
        />
        <a href="https://github.com/DavidJamesAdam" className="m-1">GitHub</a>
      </button>
    </div>
  );
}

import Image from "next/image";

export default function Socials() {
  const iconDim = 40;
  return (
    <div className="flex md:flex-row flex-col flex-1">
      <button className="inline-flex w-fit self-start border">
        <Image
          src="/linkedin.svg"
          alt="LinkedIn icon"
          width={iconDim}
          height={iconDim}
          className="purple"
        />
        <a href="https://www.linkedin.com/in/davidjamesadam/">LinkedIn</a>
      </button>
      <button className="inline-flex w-fit self-start border">
        <Image
          src="/github-142.svg"
          alt="Github icon"
          width={iconDim}
          height={iconDim}
          className="purple"
        />
        <a href="https://github.com/DavidJamesAdam">GitHub</a>
      </button>
    </div>
  );
}

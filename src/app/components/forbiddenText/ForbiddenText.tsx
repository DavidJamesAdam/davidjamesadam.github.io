import { useRef, useState } from "react";
import useSound from "use-sound";
import CatPage from "../catPage/CatPage";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

type ForbiddenTextProps = {
  orientation?: "vertical" | "horizontal";
  text?: string;
};

export default function ForbiddenText({
  orientation = "vertical",
  text = "CLIKTHIS",
}: ForbiddenTextProps) {
  const container = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound("/Karl_meow.wav", { volume: 4.5 });
  const { contextSafe } = useGSAP({ scope: container });

  const playMeow = contextSafe(() => {
    setIsPlaying(true);
    play();
  });

  const handleRevealedButton = () => {
    setIsRevealed(!isRevealed);
  };
  if (orientation === "horizontal") {
    return (
      <>
        <div
        className="relative h-3/4 w-full hover:cursor-default"
          onClick={() => {
            handleRevealedButton();
            playMeow();
          }}
          role="button"
          tabIndex={0}
        >
          <Image
            src="/Horizontal_script.svg"
            alt="Techno eldritch text"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute right-2 scale-75">
          {isRevealed && <CatPage />}
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="relative md:h-5/6 w-12 md:w-20 hover:cursor-default"
        onClick={() => {
          handleRevealedButton();
          playMeow();
        }}
        role="button"
        tabIndex={0}
        onKeyDown={() => {
          handleRevealedButton();
          playMeow();
        }}
      >
        <Image
          src="/Vertical_script.svg"
          alt="Techno eldritch text"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-2 right-8">
        {isRevealed && <CatPage />}
      </div>
    </>
  );
}

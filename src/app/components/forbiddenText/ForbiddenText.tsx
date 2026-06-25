import { useRef, useState } from "react";
import useSound from "use-sound";
import CatPage from "../catPage/CatPage";
import { useGSAP } from "@gsap/react";

type ForbiddenTextProps = {
  orientation?: "vertical" | "horizontal";
  text?: string;
};

export default function ForbiddenText({
  orientation = "vertical",
  text = "ACTIVATE",
}: ForbiddenTextProps) {
  const container = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound("/Karl_meow1.wav", { volume: 0.5 });
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
      <div className="relative w-full flex items-center justify-center eldritch-font text-3xl tracking-[0.35em] md:text-4xl">
        <div onClick={() =>{handleRevealedButton(); playMeow();}}>{text}</div>
        <div className="absolute right-2 inset-y-0 flex items-center scale-75">
          {isRevealed && <CatPage />}
        </div>
      </div>
    );
  }

  return (
    <div className="flex relative flex-col items-center justify-center gap-3">
      {text.split("").map((letter, i) => (
        <div
          className="eldritch-font text-6xl"
          key={i}
          onClick={() =>{handleRevealedButton(); playMeow();}}
        >
          {letter}
        </div>
      ))}
      <div className="absolute -bottom-1">{isRevealed && <CatPage />}</div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import useTypewriter from "./utils/TypedText";

const words = ["Enter the Dreamquest"];

// function useTypewriter(texts: string[], period = 2000) {
//   const [text, setText] = useState("");
//   const textRef = useRef("");
//   const loopNum = useRef(0);

//   useEffect(() => {
//     let timeoutId: number;

//     const tick = () => {
//       const i = loopNum.current % texts.length;
//       const fullText = texts[i];
//       const currentText = textRef.current;

//       const updatedText = fullText.substring(0, currentText.length + 1);

//       textRef.current = updatedText;
//       setText(updatedText);

//       const delay = 200 - Math.random() * 100;

//       timeoutId = window.setTimeout(tick, delay);
//     };

//     timeoutId = window.setTimeout(tick, 2000);
//     return () => clearTimeout(timeoutId);
//   }, [period, texts]);

//   return text;
// }

export default function RootContent() {
  const typedText = useTypewriter(words, 2000);
  const [converted, setConverted] = useState<boolean[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isTypingDone = typedText.length === words[0].length;
  const isMobileRef = useRef(false);
  const prevLength = useRef(0);

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startEnterAnimation = () => {
    stopAnimation();

    const snapshot = [...converted];
    const remaining = snapshot
      .map((value, index) => (!value ? index : null))
      .filter((v): v is number => v !== null);

    intervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * remaining.length);
      const charIndex = remaining.splice(randomIndex, 1)[0];

      setConverted((prev) => {
        const next = [...prev];
        next[charIndex] = true;

        return next;
      });
    }, 75);
  };

  const startLeaveAnimation = () => {
    stopAnimation();

    const snapshot = [...converted];
    const remaining = snapshot
      .map((value, index) => (value ? index : null))
      .filter((v): v is number => v !== null);

    intervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * remaining.length);
      const charIndex = remaining.splice(randomIndex, 1)[0];

      setConverted((prev) => {
        const next = [...prev];
        next[charIndex] = false;

        return next;
      });
    }, 75);
  };

  useEffect(() => {
    isMobileRef.current = window.matchMedia("(pointer: coarse)").matches;
  }, []);

  useEffect(() => {
    if (typedText.length > prevLength.current) {
      setConverted((prev) => [
        ...prev,
        ...Array(typedText.length - prev.length).fill(false),
      ]);

      prevLength.current = typedText.length;
    }
  }, [typedText]);

  useEffect(() => {
    if (!isTypingDone || !isMobileRef.current) return;

    const timeout = setTimeout(() => {
      startEnterAnimation();
    }, 2000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className="flex w-screen h-full justify-center items-center">
      <div className="w-full text-center md:w-fit h-fit weathered-effect typewriter">
        <a
          href="/home"
          onClick={(e) => {
            if (!isTypingDone) {
              e.preventDefault();
            }
          }}
          onMouseEnter={startEnterAnimation}
          onMouseLeave={startLeaveAnimation}
          className={
            !isTypingDone
              ? "pointer-events-none inline-block text-4xl wrap typewriter"
              : "inline-block text-4xl wrap typewriter"
          }
        >
          {typedText.length === 0 ? (
            <span className="wrap text-4xl eldritch-font">{"\u00A0"}</span>
          ) : (
            typedText.split("").map((char, index) => (
              <span
                key={index}
                className={
                  converted[index]
                    ? "normal-font"
                    : "eldritch-font md:text-4xl text-3xl"
                }
              >
                {char}
              </span>
            ))
          )}
        </a>
      </div>
    </div>
  );
}

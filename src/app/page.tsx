"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTypewriter } from "@/utils/useTypewriter";

export default function Page() {
  const sentence = useMemo(() => "Enter the Dreamquest", []);
  const { typedText, isDone: isTypingDone } = useTypewriter(sentence, {
    startDelay: 500,
    minDelay: 100,
    maxDelay: 200,
  });
  const [converted, setConverted] = useState<boolean[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
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
    <div className="w-full min-h-screen flex items-center justify-center text-center weathered-effect">
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
        {typedText.split("").map((char, index) => (
          <span
            key={index}
            className={converted[index] ? "normal-font" : "eldritch-font"}
          >
            {char}
          </span>
        ))}
      </a>
    </div>
  );
}

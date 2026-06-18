import { useEffect, useRef, useState } from "react";

const line1 = "EXPLORING THE INTERFACE";
const line2 = "OF THE";
const unknown = " UNKNOWN";
const chars1 = [...line1];
const chars2 = [...line2];
const chars3 = [...unknown];
const allChars = [...chars1, ...chars2, ...chars3];

export default function GlitchingText () {
  const totalChars = allChars.length;
  const [converted, setConverted] = useState<boolean[]>(
    Array(totalChars).fill(false),
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runningRef = useRef(true);
  const validIndicesRef = useRef<number[]>([]);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    validIndicesRef.current = allChars
      .map((char, i) => (char.trim() === "" ? null : i))
      .filter((i): i is number => i !== null);
  }, []);

  useEffect(() => {
    runningRef.current = true;
    const randomGlitching = () => {
      if (!runningRef.current) return;

      const pool = validIndicesRef.current;

      timeoutRef.current = setTimeout(
        () => {
          const index = pool[Math.floor(Math.random() * pool.length)];

          setConverted((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });

          setTimeout(() => {
            setConverted((prev) => {
              const next = [...prev];
              next[index] = false;
              return next;
            });

            randomGlitching();
          }, randomIntFromInterval(150, 250));
        },
        randomIntFromInterval(2000, 5000),
      );
    };

    randomGlitching();

    return () => {
      runningRef.current = false;
      clearTimer();
    };
  }, []);

  return (
            <h1 className="weathered-effect text-6xl md:text-8xl pb-5">
          {chars1.map((char, i) =>
            char.trim() === "" ? (
              <span key={i}>{char}</span>
            ) : (
              <span key={i} className={converted[i] ? "eldritch-font" : "normal-font"}>
                {char}
              </span>
            ),
          )}
          <br />

          {chars2.map((char, i) => {
            const offset = chars1.length;

            return char.trim() === "" ? (
              <span key={i}>{char}</span>
            ) : (
              <span
                key={i + offset}
                className={converted[i + offset] ? "eldritch-font" : "normal-font"}
              >
                {char}
              </span>
            );
          })}
          <span className="text-[#faf60c]">
            {chars3.map((char, i) =>
              char.trim() === "" ? (
                <span key={i}>{char}</span>
              ) : (
                <span
                  key={i + chars1.length + chars2.length}
                  className={
                    converted[i + chars1.length + chars2.length]
                      ? "eldritch-font" : "normal-font"
                  }
                >
                  {char}
                </span>
              ),
            )}
          </span>
        </h1>
  )
}
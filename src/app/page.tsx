"use client";

import { useEffect, useRef, useState } from "react";

const words = [
  "Enter the Dreamquest",
];

function useTypewriter(texts: string[], period = 2000) {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const loopNum = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeoutId: number;

    const tick = () => {
      const i = loopNum.current % texts.length;
      const fullText = texts[i];
      const currentText = textRef.current;

      const updatedText = isDeleting.current
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      textRef.current = updatedText;
      setText(updatedText);

      const delay = 200 - Math.random() * 100;

      timeoutId = window.setTimeout(tick, delay);
    };

    timeoutId = window.setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, [period, texts]);

  return text;
}

export default function Page() {
  const typedText = useTypewriter(words, 2000);

  return (
    <div className="w-full min-h-screen flex items-center justify-center weathered-text">
      <a href="/about" className="typewriter inline-block text-4xl">
        <span className="wrap">{typedText}</span>
      </a>
    </div>
  );
}
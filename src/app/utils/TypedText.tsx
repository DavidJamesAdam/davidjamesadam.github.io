import { useEffect, useRef, useState } from "react";

function useTypewriter(texts: string[], period = 2000) {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const loopNum = useRef(0);

  useEffect(() => {
    textRef.current = "";
    let timeoutId: number;
    let active = true;

    const tick = () => {
      if (!active) return;
      const i = loopNum.current % texts.length;
      const fullText = texts[i];
      const currentText = textRef.current;

      const updatedText = fullText.substring(0, currentText.length + 1);

      textRef.current = updatedText;
      setText(updatedText);

      const delay = 150 - Math.random() * 100;
      timeoutId = window.setTimeout(tick, delay);
    };

    timeoutId = window.setTimeout(() => {
      if (!active) return;
      setText("");
      if (texts.length > 0) {
        timeoutId = window.setTimeout(tick, period);
      }
    }, 0);

    return () => {
      active = false;
      clearTimeout(timeoutId);
    };
  }, [period, texts]);

  return text;
}

export default useTypewriter;

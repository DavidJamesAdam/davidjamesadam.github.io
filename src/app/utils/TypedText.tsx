import { useEffect, useRef, useState } from "react";

function useTypewriter(texts: string[], period = 2000) {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const loopNum = useRef(0);

  useEffect(() => {
    let timeoutId: number;

    const tick = () => {
      const i = loopNum.current % texts.length;
      const fullText = texts[i];
      const currentText = textRef.current;

      const updatedText = fullText.substring(0, currentText.length + 1);

      textRef.current = updatedText;
      setText(updatedText);

      const delay = 200 - Math.random() * 100;

      timeoutId = window.setTimeout(tick, delay);
    };

    timeoutId = window.setTimeout(tick, 2000);
    return () => clearTimeout(timeoutId);
  }, [period, texts]);

  return text;
}

export default useTypewriter;
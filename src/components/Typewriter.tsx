import { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
};

export function Typewriter({ text, speed = 20 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Limpa o texto ao mudar o card
    let i = 0;

    const intervalId = setInterval(() => {
      // slice pega do índice 0 até o i+1
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    // Se clicar em outro card rápido, cancela o anterior
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <p className="silver-gradient-mid typewriterAnimation">{displayedText}</p>
  );
}

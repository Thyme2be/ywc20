"use client";

import { useEffect, useState } from "react";

export default function TypingText({ message }: { message: string }) {
  const fullText = message;
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 3000); // Pause before deleting
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          setIsDeleting(false);
          setDisplayedText("");
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <p className="text-xl text-gradient-primary min-h-[1.5em]">
      {displayedText}
      <span className=" text-primary animate-blink ">|</span>
    </p>
  );
}

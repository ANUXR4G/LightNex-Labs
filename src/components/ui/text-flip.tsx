// components/TextFlip.tsx
"use client";

import { useEffect, useMemo, useRef } from "react";

export default function TextFlip() {
  const words = useMemo(
    () => ["fantastic", "love", "fire", "awesome", "fantastic"],
    []
  );
  const tallestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;
      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-0";
        span.textContent = word;
        tallestRef.current?.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current?.removeChild(span);
        if (height > maxHeight) maxHeight = height;
      });
      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  return (
    <div
      ref={tallestRef}
      className="flex flex-col overflow-hidden text-blue-400 items-center min-w-[5ch]"
      style={{ display: "inline-flex", verticalAlign: "middle" }}
    >
      {words.map((word, idx) => (
        <span key={idx} className="animate-flip-words leading-none">
          {word}
        </span>
      ))}
    </div>
  );
}
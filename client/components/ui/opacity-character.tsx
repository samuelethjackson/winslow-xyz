"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

interface ParagraphProps {
  paragraph?: string;
}

export default function Paragraph({ paragraph = "Test" }: ParagraphProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const words = paragraph.split(" ");
  return (
    <div
      ref={container}
      className="h-[150svh] w-full"
    >
      <div className="grid grid-cols-9 grid-rows-1 px-5 md:px-8 py-12 h-svh w-full sticky top-0">
        <div className="col-start-2 col-end-9 self-center flex flex-wrap font-semibold tracking-tighter text-5xl leading-[1.1]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="mr-3 mt-3 relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

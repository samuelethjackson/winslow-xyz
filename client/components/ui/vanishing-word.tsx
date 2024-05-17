"use client"

import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import VanishingCharacter from "./vanishing-character";

interface VanishingWordProps {
  value: string;
  containerRef: React.RefObject<HTMLDivElement>;
}

const VanishingWord: React.FC<VanishingWordProps> = ({value, containerRef}) => {

const words = value.split(" ");

  return (
    <div
    className="w-full flex flex-wrap max-w-5xl justify-start items-start"
    >
      {words.map((word, index) => {
        return <Word word={word} key={index} containerRef={containerRef} />
      })}
    </div>
  );
};

export default VanishingWord;

  const Word = ({word, containerRef}: {word: string, containerRef: React.RefObject<HTMLDivElement>}) => {
  return <span className="flex flex-wrap mr-10"><VanishingCharacter value={word} containerRef={containerRef} /></span>
}

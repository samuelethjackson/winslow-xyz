"use client"

import React, { useEffect, useRef } from "react";
import { useScroll, motion, MotionValue } from "framer-motion";
import VanishingCharacter from "./vanishing-character";

interface VanishingWordProps {
  value: string;
  scrollYProgress: MotionValue<number>
}

const VanishingWord: React.FC<VanishingWordProps> = ({value, scrollYProgress}) => {

const words = value.split(" ");

  return (
    <div
    className="w-full flex flex-wrap max-w-5xl justify-start items-start"
    >
      {words.map((word, index) => {
        return <Word word={word} key={index} scrollYProgress={scrollYProgress} />
      })}
    </div>
  );
};

export default VanishingWord;

  const Word = ({word, scrollYProgress}: {word: string, scrollYProgress: MotionValue<number>}) => {
  return <span className="flex flex-wrap mr-10"><VanishingCharacter value={word} scrollYProgress={scrollYProgress} /></span>
}

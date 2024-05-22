"use client"

import React, { useRef, useMemo } from "react";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";

interface VanishingCharacterProps {
  value: string;
  scrollYProgress: MotionValue<number>;
}

const VanishingCharacter: React.FC<VanishingCharacterProps> = ({ value, scrollYProgress }) => {

  const characters = value.split("");

  // Generate random ranges for each character
  const randomRanges = useMemo(() => {
    return characters.map(() => {
      const start = Math.random();
      const end = Math.min(start + (1 / characters.length), 1);
      return [start, end];
    });
  }, [characters]);

  return (
    <motion.h2 className="w-full flex flex-wrap">
      {characters.map((character, index) => {
        const [start, end] = randomRanges[index];
        return (
          <Character
            character={character}
            range={[start, end]}
            progress={scrollYProgress}
            key={index}
          />
        );
      })}
    </motion.h2>
  );
};

export default VanishingCharacter;

const Character = ({
  character,
  range,
  progress,
}: {
  character: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const y = useTransform(progress, range, [0, -100]);
  const opacityStart = range[0] + (range[1] - range[0]) * 0.5;
  const opacity = useTransform(progress, [opacityStart, range[1]], [1, 0]);
  return (
    <motion.span className="flex flex-wrap" style={{ opacity, y }}>
      {character}
    </motion.span>
  );
};

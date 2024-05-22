"use client"

import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import VanishingWord from "./vanishing-word";

interface VanishingParagraphProps {
  scrollYProgress: MotionValue<number>
}

const VanishingParagraph: React.FC<VanishingParagraphProps> = ({ scrollYProgress }) => {

  const y = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, -300]);

  return (
    <motion.div style={{ }}>
      <VanishingWord value="Accelarating humanity through growth." scrollYProgress={scrollYProgress}  />
    </motion.div>
  );
};

export default VanishingParagraph;

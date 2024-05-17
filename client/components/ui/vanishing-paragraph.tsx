"use client"

import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import VanishingWord from "./vanishing-word";

interface VanishingParagraphProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const VanishingParagraph: React.FC<VanishingParagraphProps> = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, -300]);

  return (
    <motion.div style={{ }}>
      <VanishingWord value="Accelarating humanity through growth." containerRef={containerRef} />
    </motion.div>
  );
};

export default VanishingParagraph;

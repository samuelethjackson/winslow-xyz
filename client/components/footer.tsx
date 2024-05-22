"use client";

import { motion, useScroll, useMotionValue, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface FooterProps {
  title?: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.1], [300, -200]);

  return (
    <footer className="flex flex-col gap-4 px-8 py-4 w-full z-10 bg-black text-background">
      <motion.div className="h-[80svh] flex flex-col">
        <motion.h1
        style={{ y }}
        >winslow.</motion.h1>
      </motion.div>
      <div className="grid grid-cols-9 grid-rows-1 w-full pt-4 border-t border-white">
        <p className="col-start-9 self-end place-self-end row-start-1">
          <a href="mailto:opportunities@winslow.xyz">
            opportunities@winslow.xyz
          </a>
        </p>
        <p className="col-start-6 self-end place-self-end row-start-1">
          <a href="https://linkedin.com">LinkedIn</a>
        </p>
        <p className="col-start-5 self-end place-self-end row-start-1">
          <a href="https://twitter.com/">Twitter</a>
        </p>
        <p className="col-start-1 col-end-4 self-end row-start-1">
          © 2024 Winslow Strong
        </p>
      </div>
    </footer>
  );
};

export default Footer;

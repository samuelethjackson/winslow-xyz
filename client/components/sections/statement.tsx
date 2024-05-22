"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Paragraph from "../ui/opacity-character";

interface IntroProps {
  title?: string;
  subtitle?: string;
}

const Statement: React.FC<IntroProps> = ({}) => {
  const statementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <section
      className="h-full w-full bg-black text-background flex flex-col gap-8 pb-32"
      ref={statementRef}
    >
      <Paragraph paragraph="As a former founder, I admire those who succeed against the odds. I support leaders who follow their hearts and minds. Those who are willing to face challenges, fight for their team and keep going until they reach their goal. I have faced the obstacles of building a successful startup myself. Helping other founders build thriving businesses is my ambition." />
      <div className="grid grid-cols-9 grid-rows-1 px-5 md:px-8 h-16 w-full">
        <a
          href="/#contact"
          className="col-start-2 col-end-8 row-start-2 self-center flex flex-wrap font-semibold tracking-tighter text-5xl leading-[1.1] underline underline-offset-8"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Statement;

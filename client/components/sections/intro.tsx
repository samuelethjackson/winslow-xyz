"use client";

import React, { useRef } from "react";
import NavigationBubbles from "../navigation-bubbles";
import Avatar from "../avatar";
import VanishingParagraph from "../ui/vanishing-paragraph";
import Navbar from "../ui/navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";

interface IntroProps {
  title?: string;
  subtitle?: string;
}

const Intro: React.FC<IntroProps> = ({}) => {
  const introRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <section className="h-[150svh] w-full" ref={introRef}>
      <Navbar containerRef={introRef} />
      <div className="h-[100svh] flex flex-col justify-center items-center sticky top-0">
        <motion.div
          style={{ opacity, y }}
          className="absolute top-0 left-0 grid grid-cols-9 grid-rows-5 px-5 md:px-8 pb-12 pt-4 h-full w-full "
        >
          <p className="col-start-1 col-end-8 self-start row-start-1">
            Winslow Strong
          </p>
          <p className="col-start-1 col-end-5 md:col-start-4 md:col-end-4 md:col-span-2 self-start opacity-50 md:opacity-100 row-start-2 md:row-start-1">
            Investor, Angel <br />& Philantropist
          </p>
            <NavigationBubbles/>
          <Avatar />
        </motion.div>
        <div className="absolute top-0 left-0 grid grid-cols-9 grid-rows-1 px-5 md:px-8 pb-12 pt-4 h-full w-full ">
          <div className="col-start-1 col-end-10 row-end-4 md:row-end-6 flex flex-col gap-4 self-end">
            <VanishingParagraph containerRef={introRef} />
          </div>
        </div>
        <footer className="absolute bottom-4 md:grid grid-cols-9 grid-rows-1 px-8 w-full h-min z-10">
          <motion.div
            style={{ opacity, y }}
            className="col-start-9 self-end place-self-end row-start-1 flex flex-row gap-1 center"
          >
            <a className="text-base" href="mailto:opportunities@winslow.xyz">
              Scroll
            </a>
            <GoArrowDownRight size={24} />
          </motion.div>
        </footer>
      </div>
    </section>
  );
};

export default Intro;

"use client";

import React from "react";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";

type NavigationBubblesProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};  

const NavigationBubbles: React.FC<NavigationBubblesProps> = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <motion.div
    style={{  }}
     className="col-start-1 col-end-10 grid grid-cols-11 md:grid-cols-9 row-start-3 row-span-1 grid-rows-2 h-24 w-full">
      <div className="-rotate-[60deg] md:rotate-0 col-start-1 row-start-2">
        <Pill label="About" href="/#about"/>
      </div>
      <div className="-rotate-[60deg] md:rotate-0 col-start-3 md:col-start-2 row-start-2">
        <Pill label="Investing" href="/#investing"/>
      </div>
      <div className="-rotate-[0deg] md:ml-28 md:mt-4 col-start-7 md:col-start-2 row-start-2 md:row-start-1 md:rotate-[28deg]">
      <Pill label="Contact" href="/#contact" dark/>
      </div>
      <div className="-rotate-[60deg] md:rotate-0 col-start-5 row-start-2">
        <Pill label="Philantropy" href="/#philantropy"/>
      </div>
      <div className="hidden md:flex col-start-4 row-start-2 size-12 bg-black text-background dark:bg-white dark:text-black center rounded-full text-4xl pt-3 self-end">*</div>
    </motion.div>
  );
};

export default NavigationBubbles;

const Pill = ({label, href, dark}: {label: string, href: string, dark?: boolean}) => {
  return (
      <Link className={`pills flex flex-row gap-2 center px-4 py-3 pb-2.5 border-black border-2 rounded-full uppercase text-sm md:text-base w-min h-10 md:h-10 leading-none font-medium dark:bg-black dark:text-background dark:border-background hover:bg-black hover:text-background dark:hover:text-black dark:hover:bg-background cursor-pointer transition-colors duration-300 group ${dark ? "bg-black text-background border-background" : "bg-background text-black border-black"}`} href={href}>{label}</Link>
  );
};


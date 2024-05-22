"use client";

import React from "react";
import { about } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import StarIcon from "../icons/star";
import Line from "../ui/line";
import { useScroll, motion, useTransform } from "framer-motion";

interface IntroProps {
  title?: string;
  subtitle?: string;
}

const Contact: React.FC<IntroProps> = ({}) => {
  const { ref } = useSectionInView("Contact");
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative h-svh w-screen p-8 bg-background text-black z-10 flex center overflow-hidden"
    >
      <motion.div 
      style={{ rotate }}
      className="absolute -top-24 -right-32 rotate-12 size-[64vh] flex center bg-black rounded-full"><StarIcon color="#E5E5E5" className="size-80"/></motion.div>
      <div className="w-full h-full flex flex-col justify-end gap-16 p-24 pb-32">
        <h3 className="">Let&apos;s touch base.</h3>
        <p className="">
          In my journey as an investor I&apos;ve been fortunate enough to support
          some truly great founders and projects. My experience has been a
          constant learning curve, always looking for ways to provide better
          support. I&apos;m committed to this journey and grateful for every founder
          who trusts me with his or her dreams of building something truly
          meaningful.
        </p>
        <Line />
      </div>
    </section>
  );
};

export default Contact;

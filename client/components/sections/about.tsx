"use client"

import React from "react";
import { about } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

interface IntroProps {
  title?: string;
  subtitle?: string;
}

const About: React.FC<IntroProps> = ({}) => {
  const { ref } = useSectionInView("About");

  return (
    <section
    id="about"
    ref={ref}
    className="h-svh bg-black text-background z-10 dark:bg-background dark:text-black">
      <div className="grid grid-cols-9 grid-rows-4 px-5 md:px-8 py-12 h-full w-full">
        <h3 className="col-start-2 col-end-6 row-start-2 self-center mb-16">
          Winslow Strong.
          <span className="opacity-30"> Investor, Angel & Philantropist.</span>
        </h3>
        <div className="col-start-2 col-end-5 row-start-3 flex flex-col gap-6">
          <h4 className="min-h-12">{about[0].title}</h4>
          <p>{about[0].description}</p>
        </div>
        <div className="col-start-6 col-end-9 row-start-3 flex flex-col gap-6">
          <h4 className="min-h-12">{about[1].title}</h4>
          <p>{about[1].description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

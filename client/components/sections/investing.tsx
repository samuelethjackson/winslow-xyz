"use client"

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import LogoSlider from "../ui/logo-slider";

interface IntroProps {
  title?: string;
  subtitle?: string;
}

const Investing: React.FC<IntroProps> = ({}) => {
  const { ref } = useSectionInView("Investing");

  return (
    <section
    id="investing"
    ref={ref}
    className="bg-background text-black z-10 dark:bg-black dark:text-background grid grid-cols-9 pt-40 pb-32">
      <div className="col-start-2 col-end-9 flex flex-col gap-16 px-5 md:px-8 h-full w-full center">
        <div className="w-full flex flex-row gap-4">
          <h3 className="text-center w-full">
            Investing
          </h3>
          <div className="w-full text-left">
            <p>I'm not just a financier, I'm an active participant. Your mission is critical - it resonates with me. I put people first. I care about building real relationships. And I trust my founders. Here are some of my current and past investments in great companies:</p>
          </div>
        </div>
        <div className="absolute left-0 w-full h-svh">
          <LogoSlider />
        </div>
      </div>
    </section>
  );
};

export default Investing;

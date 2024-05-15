"use client"

import React from "react";
import { about } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

interface IntroProps {
  title?: string;
  subtitle?: string;
}

const Contact: React.FC<IntroProps> = ({}) => {
  const { ref } = useSectionInView("Contact");

  return (
    <section
    id="contact"
    ref={ref}
    className="h-svh w-screen p-8 bg-background text-black z-10 dark:bg-black dark:text-background flex center">
      <div className="w-full h-full bg-black text-white flex flex-col center gap-4 p-24">
          <p>Give me a shout! I'm ready to chat.</p>
          <a className="big-link">opportunities@winslow.xyz</a>
        </div>
    </section>
  );
};

export default Contact;

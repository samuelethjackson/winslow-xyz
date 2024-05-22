"use client";

import React from "react";
import { about } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import StarIcon from "../icons/star";

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
      className="relative h-svh w-screen p-8 bg-background text-black z-10 flex center overflow-hidden"
    >
      <div className="hidden absolute -top-24 -right-32 rotate-12 size-[64vh] flex center bg-black rounded-full"><StarIcon color="#E5E5E5" className="size-80"/></div>
      <div className="hidden absolute -top-24 -right-32 rotate-12 size-[64vh] flex center"><svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89.4324 54H110.568L111.811 85.9057L139.784 77.8519L146 97.367L118.959 107.279L136.365 133.919L119.892 146L100 120.909L80.1081 146L63.6351 133.919L81.3513 107.899L54 97.367L60.2162 77.8519L87.8784 85.9057L89.4324 54Z" fill="#E5E5E5"/>
</svg>
</div>
      <div className="w-full h-full flex flex-col justify-end gap-16 p-24 pb-32">
        <h3 className="">Let's touch base.</h3>
        <p className="">
          In my journey as an investor I've been fortunate enough to support
          some truly great founders and projects. My experience has been a
          constant learning curve, always looking for ways to provide better
          support. I'm committed to this journey and grateful for every founder
          who trusts me with his or her dreams of building something truly
          meaningful.
        </p>
        <div className="w-full flex flex-row justify-between items-end gap-4 pt-12 border-t border-black">
          <p className="">
            Give me a shout! <br />
            I'm ready to chat.
          </p>
          <a className="big-link">opportunities@winslow.xyz</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

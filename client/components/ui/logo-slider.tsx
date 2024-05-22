"use client";

import React from "react";
import Link from "next/link";
import { investments } from "@/lib/data";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const LogoSlider: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [viewportWidth, setViewportWidth] = React.useState<number>(0);
  const [screenCenter, setScreenCenter] = React.useState<number>(0);

  React.useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth);
      setScreenCenter(window.innerWidth / 2);
    };

    window.addEventListener('resize', updateWidth);

    // Set initial width and log it
    updateWidth();

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const xTop = useTransform(scrollYProgress, [0, 1], [-2560+screenCenter-128, screenCenter]);
  const xBottom = useTransform(scrollYProgress, [0, 1], [1280, -2560+screenCenter-128]);

  const Logo: React.FC<{ src: string; name: string; link: string }> = ({
    src,
    name,
    link,
  }) => (
    <Link
      href={`${link}`}
      className="flex flex-col grayscale p-4 bg-background size-64 text-black justify-between items-center group cursor-pointer"
    >
      <span className="hidden md:block h-4"></span>
      <img
        className="max-w-28 transition-transform dark:brightness-[.25]"
        src={src}
        alt={`${name}`}
      />
      <span className="hidden md:block w-full text-center uppercase text-xs transition-opacity">
        {name}
      </span>
    </Link>
  );

  return (
    <div
      ref={ref}
      className="absolute left-0 mt-16 w-screen h-[200svh] flex flex-col justify-start"
    >
      <div className="w-full h-svh sticky top-0 flex flex-col gap-8 items-center justify-center">
        <div className="w-full h-[608px] flex flex-col gap-8 center">
          <div className="w-full h-64 relative">
            <motion.div
              className="absolute top-0 left-0 w-max grid grid-cols-10 bg-black gap-[1px] border-black border"
              style={{ x: xTop }}
            >
              {investments.slice(0, 10).map((item) => (
                <Logo
                  src={item.logo}
                  name={item.name}
                  link={item.link}
                  key={item.name}
                />
              ))}
            </motion.div>
          </div>
          <div className="w-full h-64 relative">
            <motion.div
              className="absolute top-0 left-0 w-max grid grid-cols-10 bg-black gap-[1px] border-black border"
              style={{ x: xBottom }}
            >
              {investments.slice(10, 20).map((item) => (
                <Logo
                  src={item.logo}
                  name={item.name}
                  link={item.link}
                  key={item.name}
                />
              ))}
            </motion.div>
          </div>
          <p className="w-full h-8 flex flex-col text-center center">
            and many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;

"use client";

import React from "react";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

interface NavbarProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.95, 1], [-20, -20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.95, 1], [0, 0, 1]);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-4 w-full flex justify-center items-center p-2 z-50"
    >
      <div className="w-full max-w-xl flex flex-row bg-black/50 rounded-full p-2 ring-1 ring-background/10">
        <ul className="w-full h-10 flex flex-row gap-4 justify-between bg-black/80 rounded-full text-white uppercase text-xs p-0.5">
          {links.map((link) => (
            <motion.li
              className="h-full w-full flex flex-row gap-4 center relative"
              key={link.hash}
            >
              <Link
                className={clsx(
                  "flex w-full h-full rounded-full center hover:text-zinc-500 transition",
                  {
                    "text-white pointer-events-none":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-background/20 text-white rounded-full absolute inset-0 z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

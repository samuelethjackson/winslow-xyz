"use client";

import React from "react";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

interface NavbarProps {
  // Define any props you might need for the Navbar
}

const Navbar: React.FC<NavbarProps> = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.405], [0, 1, 1]);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.nav
      style={{ opacity }}
      className="fixed top-4 w-full flex justify-center items-center p-2 z-50"
    >
      <div className="w-full max-w-2xl flex flex-row bg-black/50 rounded-full p-2 ring-1 ring-background/10">
        <ul className="w-full h-10 flex flex-row gap-4 justify-between bg-black rounded-full text-white uppercase text-sm">
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

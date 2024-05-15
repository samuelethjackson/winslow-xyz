"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Drawer } from "vaul";
import Header from "@/components/header";
import AboutPanel from "../panels/about";
import ContactPanel from "../panels/contact";
import InvestingPanel from "../panels/investing";
import PhilantropyPanel from "../panels/philantropy";

interface HamburgerProps {
  color?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({ color = "black" }) => {
  const { theme } = useTheme();

  const strokeColor = theme === "dark" ? "#E5E5E5" : "#000000";

  return (
    <Drawer.Root direction="top">
      <Drawer.Trigger asChild>
        <div className="flex flex-row center gap-4 cursor-pointer">
          <svg
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-500 ease-in-out"
          >
            {/* Use the passed color prop for stroke, and provide a way to override it for dark mode if needed */}
            <path d="M0 6H28" stroke={strokeColor} strokeWidth={1.3} />
            <path d="M0 16H28" stroke={strokeColor} strokeWidth={1.3} />
            <path d="M0 26H28" stroke={strokeColor} strokeWidth={1.3} />
          </svg>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed w-screen h-screen bottom-0 left-0 inset-0 bg-black/75 backdrop-blur-sm outline-none" />
        <Drawer.Content className="bg-background flex flex-col h-full w-full fixed bottom-0 left-0 outline-none panel">
          <Header menu={true}/>
          <div className="w-full h-full flex flex-col center gap-8 hamburger">
          <div className="strike text-black">
              <AboutPanel />
            </div>
            <InvestingPanel />
            <PhilantropyPanel />
            <ContactPanel />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Hamburger;

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

  const strokeColor = theme === "dark" ? "#000000" : "#E5E5E5";

  return (
    <Drawer.Root direction="top">
      <Drawer.Trigger asChild>
        <div className="flex flex-row center gap-4 cursor-pointer size-10 rounded-md p-1 bg-black dark:bg-background">
          <svg className="c-sidebar__toggle-icon size-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="2" height="2" fill={strokeColor}></rect>
                <rect x="2" y="7" width="2" height="2" fill={strokeColor}></rect>
                  <rect x="2" y="12" width="2" height="2" fill={strokeColor}></rect>
                <rect x="7" y="2" width="2" height="2" fill={strokeColor}></rect>
                <rect x="7" y="7" width="2" height="2" fill={strokeColor}></rect>
                <rect x="7" y="12" width="2" height="2" fill={strokeColor}></rect>
                <rect x="12" y="2" width="2" height="2" fill={strokeColor}></rect>
                <rect x="12" y="7" width="2" height="2" fill={strokeColor}></rect>
                <rect x="12" y="12" width="2" height="2" fill={strokeColor}></rect>
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


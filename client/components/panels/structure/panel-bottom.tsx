"use client";

import React from "react";
import { Drawer } from "vaul";

interface PanelProps {
  children?: React.ReactNode;
  buttonLabel: string;
  updated?: boolean;
  dark?: boolean;
}

const BottomPanel: React.FC<PanelProps> = ({
  children,
  buttonLabel,
  updated,
  dark
}) => {
  return (
    <Drawer.Root direction="bottom">
      <Drawer.Trigger asChild>
      <div className={`pills flex flex-row gap-2 center px-5 py-3 pb-2.5 border-black border-2 rounded-full uppercase text-sm md:text-lg w-min h-10 md:h-12 leading-none font-medium cursor-pointer ${dark ? 'bg-black text-background hover:bg-opacity-70 hover:border-opacity-50 dark:bg-background dark:text-black dark:hover:text-black dark:hover:bg-opacity-70' : 'hover:bg-black hover:text-background'} transition-colors duration-300 group`}>
          {buttonLabel}
          {updated && <div className="update size-3 bg-black rounded-full mb-[1px] group-hover:bg-background"/>}
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed w-screen h-screen bottom-0 left-0 inset-0 bg-black/10 backdrop-blur-md outline-none" />
        <Drawer.Content className="bg-black flex flex-col h-[40vh] w-full fixed bottom-0 left-0 outline-none panel">
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default BottomPanel;

"use client";

import React from "react";
import { Drawer } from "vaul";

interface PanelProps {
  children?: React.ReactNode;
  buttonLabel: string;
  updated?: boolean;
  dark?: boolean;
}

const Panel: React.FC<PanelProps> = ({ children, buttonLabel, updated, dark }) => {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger asChild>
        <div className={`pills flex flex-row gap-2 center px-5 py-3 pb-2.5 border-black border-2 rounded-full uppercase text-sm md:text-lg w-min h-10 md:h-12 leading-none font-medium dark:bg-black dark:text-background dark:border-background hover:bg-black hover:text-background dark:hover:text-black dark:hover:bg-background cursor-pointer transition-colors duration-300 group`}>
          {buttonLabel}
          {updated && <div className="size-3 bg-black dark:bg-background rounded-full mb-[1px] group-hover:bg-background dark:group-hover:bg-black"/>}
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed w-screen h-screen bottom-0 left-0 inset-0 bg-black/50 outline-none" />
        <Drawer.Content className="bg-background flex flex-col h-full w-full md:max-w-[50vw] fixed bottom-0 left-0 outline-none panel">
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default Panel;

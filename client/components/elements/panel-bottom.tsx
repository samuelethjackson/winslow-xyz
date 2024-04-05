"use client";

import React from "react";
import { Drawer } from "vaul";

interface PanelProps {
  children?: React.ReactNode;
  buttonLabel: string;
  updated?: boolean;
}

const BottomPanel: React.FC<PanelProps> = ({
  children,
  buttonLabel,
  updated,
}) => {
  return (
    <Drawer.Root direction="bottom">
      <Drawer.Trigger asChild>
        <div className="flex flex-row gap-2 center px-5 py-3 pb-2.5 border-black border-2 rounded-full uppercase text-sm md:text-lg w-min h-10 md:h-12 leading-none font-medium cursor-pointer hover:bg-black hover:text-background transition-colors duration-300 group">
          {buttonLabel}
          {updated && (
            <div className="size-3 bg-black rounded-full mb-[1px] group-hover:bg-background" />
          )}
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed w-screen h-screen bottom-0 left-0 inset-0 bg-black/75 backdrop-blur-sm outline-none" />
        <Drawer.Content className="bg-black flex flex-col h-[50vh] w-full fixed bottom-0 left-0 outline-none panel">
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default BottomPanel;

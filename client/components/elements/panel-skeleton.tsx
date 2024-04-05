"use client";

import React from "react";
import { Drawer } from "vaul";
import CloseIcon from "../icons/close";

interface PanelSkeletonProps {
  bottomTitle?: string;
  topTitle?: string;
  children: React.ReactNode;
}

const PanelSkeleton: React.FC<PanelSkeletonProps> = ({
  bottomTitle,
  topTitle,
  children,
}) => {
  return (
    <div className="h-full w-full flex flex-col gap-4 p-8 justify-between">
      <div className="w-full h-full flex flex-col gap-8">
        <Drawer.Close
          asChild
          className="w-full flex flex-row justify-end text-2xl font-bold uppercase"
        >
          <button className="size-8">
            <CloseIcon />
          </button>
        </Drawer.Close>
        <div className="flex flex-col gap-8 w-full h-full overflow-y-auto no-scrollbar">
          {topTitle && <h2 className="font-bold text-3xl">{topTitle}</h2>}
          {children}
        </div>
      </div>
      {bottomTitle && (
        <h2 className="absolute bottom-4 left-6 font-bold">{bottomTitle}</h2>
      )}
    </div>
  );
};

export default PanelSkeleton;

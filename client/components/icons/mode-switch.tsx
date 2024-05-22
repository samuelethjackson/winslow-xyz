"use client";

import React from "react";
import { useTheme } from "next-themes";

const ModeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`relative size-4 bg-black dark:bg-background rounded-full overflow-hidden border border-black dark:border-background transition-transform duration-1000 cursor-pointer`}
      onClick={toggleTheme}
    >
      <div className="bg-background dark:bg-black size-4 absolute top-0 left-[8px]"></div>
    </div>
  );
};

export default ModeSwitch;

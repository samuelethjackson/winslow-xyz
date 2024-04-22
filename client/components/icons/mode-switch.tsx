"use client";

import React from "react";
import { useTheme } from "next-themes";

const ModeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  console.log(`Current theme: ${theme}`);

  return (
    <div
      className={`relative size-6 bg-black dark:bg-background rounded-full overflow-hidden border border-black dark:border-background transition-transform duration-1000 cursor-pointer`}
      onClick={toggleTheme}
    >
      <div className="bg-background dark:bg-black size-6 absolute top-0 left-[11px]"></div>
    </div>
  );
};

export default ModeSwitch;

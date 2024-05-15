"use client";

import React from 'react';
import { useTheme } from "next-themes";

interface CloseIconProps {
  color?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ color = 'black' }) => {
  const { theme } = useTheme();

  const strokeColor = theme === "dark" ? "#E5E5E5" : "#000000";
  const accentColor = theme === "dark" ? "#000000" : "#E5E5E5";

  return (
    <div className="flex flex-row center gap-4 cursor-pointer">
          <svg
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-500 ease-in-out"
          >
            <path d="M2 2L26 26" stroke={strokeColor} strokeWidth={1.3} />
            <path d="M26 2L2 26" stroke={strokeColor} strokeWidth={1.3} />
          </svg>
        </div>
  );
};

export default CloseIcon;

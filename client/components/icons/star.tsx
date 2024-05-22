"use client";

import React from "react";
import { useTheme } from "next-themes";

interface StarIconProps {
  color?: string;
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ color = "black", className }) => {
  const { theme } = useTheme();

  const strokeColor = theme === "dark" ? "#E5E5E5" : "#000000";
  const accentColor = theme === "dark" ? "#000000" : "#E5E5E5";

  return (
    <div className={`flex flex-row center gap-4 cursor-pointer ${className}`}>
      <svg
        viewBox="0 0 34 34"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.768 0H20.384L20.832 11.536L30.912 8.624L33.152 15.68L23.408 19.264L29.68 28.896L23.744 33.264L16.576 24.192L9.408 33.264L3.472 28.896L9.856 19.488L0 15.68L2.24 8.624L12.208 11.536L12.768 0Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default StarIcon;

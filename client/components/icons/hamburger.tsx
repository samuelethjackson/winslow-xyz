import React from "react";

interface HamburgerProps {
  color?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({ color = "black" }) => {
  return (
    <div className="flex flex-row center gap-4">
      <p className="uppercase text-sm md:text-lg !leading-none font-medium hidden">Menu</p>
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-500 ease-in-out"
      >
        <path d="M0 6H28" stroke="black" strokeWidth={1.3}/>
        <path d="M0 16H28" stroke="black" strokeWidth={1.3}/>
        <path d="M0 26H28" stroke="black" strokeWidth={1.3}/>
      </svg>
    </div>
  );
};

export default Hamburger;

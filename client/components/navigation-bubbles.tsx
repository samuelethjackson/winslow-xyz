import React from "react";
import AboutPanel from "./panels/about";
import ContactPanel from "./panels/contact";
import InvestingPanel from "./panels/investing";
import PhilantropyPanel from "./panels/philantropy";
import Link from "next/link";

const NavigationBubbles: React.FC = () => {

  return (
    <div className="col-start-1 col-end-10 grid grid-cols-11 md:grid-cols-9 row-start-3 row-span-1 grid-rows-2 h-24 w-full">
      <div className="-rotate-[60deg] md:rotate-0 col-start-1 row-start-2">
        <Link className="pills flex flex-row gap-2 center px-5 py-3 pb-2.5 border-black border-2 rounded-full uppercase text-sm md:text-lg w-min h-10 md:h-12 leading-none font-medium dark:bg-black dark:text-background dark:border-background hover:bg-black hover:text-background dark:hover:text-black dark:hover:bg-background cursor-pointer transition-colors duration-300 group" href={"/#about"}>About</Link>
      </div>
      <div className="-rotate-[60deg] md:rotate-0 col-start-3 md:col-start-2 row-start-2">
      <Link className="pills flex flex-row gap-2 center px-5 py-3 pb-2.5 border-black border-2 rounded-full uppercase text-sm md:text-lg w-min h-10 md:h-12 leading-none font-medium dark:bg-black dark:text-background dark:border-background hover:bg-black hover:text-background dark:hover:text-black dark:hover:bg-background cursor-pointer transition-colors duration-300 group" href={"/#investing"}>Investing<div className="size-3 bg-black dark:bg-background rounded-full mb-[1px] group-hover:bg-background dark:group-hover:bg-black"/></Link>
      </div>
      <div className="-rotate-[0deg] md:ml-32 md:mt-1 col-start-7 md:col-start-2 row-start-2 md:row-start-1 md:rotate-[28deg]">
      <Link className="pills flex flex-row gap-2 center px-5 py-3 pb-2.5 border-black border-2 rounded-full uppercase text-sm md:text-lg w-min h-10 md:h-12 leading-none font-medium cursor-pointer bg-black text-background hover:bg-opacity-70 hover:border-opacity-50 dark:bg-background dark:text-black dark:hover:text-black dark:hover:bg-opacity-70 transition-colors duration-300 group" href={"/#contact"}>Contact</Link>
      </div>
      <div className="-rotate-[60deg] md:rotate-0 col-start-5 row-start-2">
      <Link className="pills flex flex-row gap-2 center px-5 py-3 pb-2.5 border-black border-2 rounded-full uppercase text-sm md:text-lg w-min h-10 md:h-12 leading-none font-medium dark:bg-black dark:text-background dark:border-background hover:bg-black hover:text-background dark:hover:text-black dark:hover:bg-background cursor-pointer transition-colors duration-300 group" href={"/#philantropy"}>Philantropy</Link>
      </div>
      <div className="hidden md:flex col-start-4 row-start-2 size-16 bg-black text-background dark:bg-white dark:text-black center rounded-full text-5xl pt-4 self-end">*</div>
    </div>
  );
};

export default NavigationBubbles;
import React from "react";
import Link from "next/link";
import { investments } from "@/lib/data";

const LogoSlider: React.FC = () => {
  const Logo: React.FC<{ src: string; name: string; link: string }> = ({
    src,
    name,
    link,
  }) => (
    <Link
      href={`${link}`}
      className="flex flex-col grayscale p-4 bg-background size-64 text-black justify-between items-center group cursor-pointer"
    >
      <span className="hidden md:block h-4"></span>
      <img
        className="max-w-28 transition-transform dark:brightness-[.25] duration-500 ease-in-out group-hover:scale-90"
        src={src}
        alt={`${name}`}
      />
      <span className="hidden md:block w-full text-center uppercase text-xs transition-opacity duration-500 ease-in-out group-hover:opacity-0">
        {name}
      </span>
    </Link>
  );

  return (
    <div className="absolute left-0 w-screen h-svh flex flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-16 items-center justify-center">
        <div className="grid grid-cols-10 bg-black gap-[1px] border-black border">
          {investments.slice(0, 10).map((item) => (
            <Logo src={item.logo} name={item.name} link={item.link} />
          ))}
        </div>
        <div className="w-full grid grid-cols-10 bg-black gap-[1px] border-black border">
          {investments.slice(10, 20).map((item) => (
            <Logo src={item.logo} name={item.name} link={item.link} />
          ))}
        </div>
        <p className="w-full flex flex-col text-center center">
          and many more.
        </p>
      </div>
    </div>
  );
};

export default LogoSlider;

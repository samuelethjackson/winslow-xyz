import React from "react";
import Link from "next/link";
import { Button } from "./button";

const LogoCloud: React.FC = () => {
  const Logo: React.FC<{ src: string; name: string; link: string }> = ({
    src,
    name,
    link,
  }) => (
    <Link
      href={`${link}`}
      className="flex flex-col rounded-2xl grayscale p-2 bg-black border-black/50 border-2 dark:bg-white/5 dark:border dark:border-white/50 aspect-video text-background justify-between items-center group cursor-pointer"
    >
      <span className="hidden md:block h-4"></span>
      <img
        className="max-w-28 transition-transform invert dark:brightness-[.25] duration-500 ease-in-out group-hover:scale-110"
        src={src}
        alt={`${name}`}
      />
      <span className="hidden md:block w-full text-right uppercase text-sm pr-1 transition-opacity duration-1000 ease-in-out group-hover:opacity-0">
        {name}
      </span>
    </Link>
  );

  return (
      <div className="w-full flex flex-col">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 bg-background dark:bg-black">
            <Logo
              link=""
              name="Cluster Capital"
              src="https://k21.kanon.art/images/cluster.svg"
            />
            <Logo
              link=""
              name="Collider"
              src="https://k21.kanon.art/images/collider.png"
            />
            <Logo
              link=""
              name="Divergence"
              src="https://k21.kanon.art/images/divergence.svg"
            />
            <Logo
              link=""
              name="Coinbase Ventures"
              src="https://images.ctfassets.net/qnx1f79oa09i/4kqyHAqmTWHFtFeKyehqOq/8b3420903bfdbeeec00d4af35ea758da/Coinbase-logo_1.png?w=256&q=80&fm=webp"
            />
            <Logo
              link=""
              name="Nascent"
              src="https://k21.kanon.art/images/nascent.svg"
            />
            <Logo
              link=""
              name="Fungify"
              src="https://fungify.it/assets/logo-9cf21982.svg"
            />
            <Logo
              link=""
              name="Fungify"
              src="https://fungify.it/assets/logo-9cf21982.svg"
            />
            <Logo
              link=""
              name="Fungify"
              src="https://fungify.it/assets/logo-9cf21982.svg"
            />
            <Logo
              link=""
              name="Fungify"
              src="https://fungify.it/assets/logo-9cf21982.svg"
            />
          </div>
          <div className="w-full flex flex-col center mt-8"><Button variant="outline">Load more</Button></div>
        </div>
      </div>
  );
};

export default LogoCloud;

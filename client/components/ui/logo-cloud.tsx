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
      className="flex flex-col grayscale p-4 bg-background h-80 text-black justify-between items-center group cursor-pointer"
    >
      <span className="hidden md:block h-4"></span>
      <img
        className="max-w-28 transition-transform dark:brightness-[.25] duration-500 ease-in-out group-hover:scale-90"
        src={src}
        alt={`${name}`}
      />
      <span className="hidden md:block w-full text-center uppercase text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-0">
        {name}
      </span>
    </Link>
  );

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col gap-16 center">
        <div className="w-full grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 bg-black gap-[1px] border-black border">
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/2560px-Coinbase.svg.png"
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
            name="Antrophic"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/1200px-Anthropic_logo.svg.png"
          />
          <Logo
            link=""
            name="Kelp DAO"
            src="https://kelpdao.xyz/assets/kelp.svg"
          />
          <Logo
            link=""
            name="Gasp"
            src="https://assets-global.website-files.com/6607ffbc379bc260c51c9ff3/660bdb84be46f7542142f27a_gasplogo.svg"
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/2560px-Coinbase.svg.png"
          />
        </div>
        <p className="w-full flex flex-col text-center center">
          and many more.
        </p>
      </div>
    </div>
  );
};

export default LogoCloud;

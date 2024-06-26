import React from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const Avatar = () => {

  return (
    <motion.div 
      className="col-start-1 col-end-10 md:col-start-7 md:col-end-10 row-end-6 md:row-start-2 md:row-end-3 self-end flex-col gap-8 group md:-mb-16 md:ml-12">
      <div className="rounded-2xl overflow-clip shadow-xl aspect-video flex flex-col justify-center transition-all duration-1000 md:mr-0 md:ml-0 group/image">
        <Image
          className="w-full mb-8 group-hover/image:scale-110 transition-all duration-1000"
          src={"/winslow.png"}
          alt=""
          width={900}
          height={500}
        ></Image>
      </div>
      <p className="w-full pt-8 ml-8 text-black opacity-0 group-hover:opacity-100 transition-all duration-1000">Yeah, that&apos;s me.</p>
    </motion.div>
  );
};

export default Avatar;
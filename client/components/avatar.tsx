import React from "react";
import Image from "next/image";

interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = ({}) => {
  return (
    <div className="col-start-1 col-end-10 md:col-start-7 md:col-end-10 row-end-6 md:row-start-2 md:row-end-3 self-end flex-col gap-8 group">
      <div className="col-start-1 col-end-10 md:col-start-7 md:col-end-10 row-end-6 md:row-start-2 md:row-end-3 self-end rounded-2xl overflow-clip shadow-xl aspect-video flex flex-col justify-center transition-all duration-1000 md:mr-20 md:ml-8 group/image">
        <Image
          className="w-full mb-8 group-hover/image:scale-110 transition-all duration-1000"
          src={"/winslow.png"}
          alt=""
          width={900}
          height={500}
        ></Image>
      </div>
      <p className="w-full pt-8 ml-8 text-black opacity-0 group-hover:opacity-100 transition-all duration-1000">Yeah, that's me.</p>
    </div>
  );
};

export default Avatar;
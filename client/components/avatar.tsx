import React from "react";
import Image from "next/image";

interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = ({}) => {
  return (
    <div className="col-start-1 col-end-10 md:col-start-7 md:col-end-10 row-end-6 md:row-start-2 md:row-end-3 self-end rounded-2xl overflow-clip shadow-xl aspect-video flex flex-col justify-center transition-all duration-1000 md:mr-20 md:ml-8">
      <Image
        className="w-full mb-8"
        src={"/winslow.png"}
        alt=""
        width={900}
        height={500}
      ></Image>
    </div>
  );
};

export default Avatar;
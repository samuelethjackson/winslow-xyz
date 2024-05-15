"use client";

import React from "react";
import { philantropy } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import PhilantropyCard from "../ui/philantropy-card";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';


interface IntroProps {
  title?: string;
  subtitle?: string;
}

const Philantropy: React.FC<IntroProps> = ({}) => {
  const { ref } = useSectionInView("Philantropy");

  return (
    <section
      id="philantropy"
      ref={ref}
      className="h-[200svh] bg-black text-background z-10 dark:bg-background dark:text-black snap-mandatory snap-y"
    >
      <div className="flex flex-col h-[100svh] sticky top-0 w-screen overflow-x-scroll no-scrollbar snap-start border-t border-black dark:border-background">
        <div className="h-full flex flex-row w-[150vw] gap-0 snap-mandatory snap-x">
          <div className="sticky bg-black left-0 flex flex-col gap-8 w-full p-12 border-r border-background z-40">
            <p>Empowering Change, One Cause at a Time</p>
            <h3>Acting beyond profit</h3>
          </div>
          <PhilantropyCard
            number={1}
            character={philantropy[0].character}
            title={philantropy[0].title}
            description={philantropy[0].description}
          />
          <PhilantropyCard
            number={2}
            character={philantropy[1].character}
            title={philantropy[1].title}
            description={philantropy[1].description}
          />
          <PhilantropyCard
            number={3}
            character={philantropy[2].character}
            title={philantropy[2].title}
            description={philantropy[2].description}
          />
          <PhilantropyCard
            number={4}
            character={philantropy[3].character}
            title={philantropy[3].title}
            description={philantropy[3].description}
          />
        </div>
        <div className="sticky left-0 h-16 bg-black border-t border-background text-center flex">
            <button className="text-background border-r border-background hover:text-opacity-80 transition duration-300 flex flex-col center size-16">
              <IoIosArrowRoundBack size={24} />
            </button>
            <button className="text-background border-r border-background hover:text-opacity-80 transition duration-300 flex flex-col center size-16">
              <IoIosArrowRoundForward size={24} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Philantropy;

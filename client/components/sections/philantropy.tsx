"use client";

import React, { useState, useEffect, useRef } from "react";
import { philantropy } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import PhilantropyCard from "../ui/philantropy-card";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { useMotionValueEvent, useScroll } from "framer-motion";

interface IntroProps {
  title?: string;
  subtitle?: string;
}

const Philantropy: React.FC<IntroProps> = ({}) => {
  const { ref } = useSectionInView("Philantropy");
  const carouselRef = useRef(null)
  const [activeCard, setActiveCard] = useState<number | null>(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);


  const handleCardClick = (number: number) => {
    setActiveCard(prev => prev === number ? null : number); // Toggle active state
  };

  const handleNext = () => {
    setActiveCard(prev => (prev === 4 ? 1 : (prev ?? 0) + 1)); // Cycle forward
  };

  const handlePrev = () => {
    setActiveCard(prev => (prev === 1 ? 4 : (prev ?? 0) - 1)); // Cycle backward
  };

  useEffect(() => {
    if (activeCard !== null && scrollContainerRef.current) {
      const newScrollPosition = (activeCard - 1) * 20; // 20 per card
      scrollContainerRef.current.style.transform = `translateX(-${newScrollPosition}vw)`;
    }
  }, [activeCard]);

  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveCard(1);
    } else if (latest >= 0.25 && latest < 0.5) {
      setActiveCard(2);
    } else if (latest >= 0.5 && latest < 0.75) {
      setActiveCard(3);
    } else if (latest >= 0.75) {
      setActiveCard(4);
    }
  });

  useEffect(() => {
    console.log("Current active card:", activeCard);
    console.log("Current scroll Y progress:", scrollYProgress.get());
  }, [activeCard, scrollYProgress]);

  return (
    <section id="philantropy" ref={ref}>
      <div
        ref={carouselRef}
        className="h-[400svh] bg-black text-background z-10 dark:bg-background dark:text-black"
      >
        <div className="flex flex-col h-[100svh] sticky top-0 w-screen no-scrollbar border-t border-black dark:border-background">
          <div className="h-full flex flex-row w-[160vw] gap-0">
            <div className="sticky bg-black left-0 flex flex-col gap-8 w-1/4 p-12 border-r border-background z-40">
              <p>Acting beyond profit.</p>
              <h3>Empowering Change. <br/>One Cause at a time.</h3>
            </div>
            <div
            ref={scrollContainerRef} className="w-full flex flex-row gap-0 transition-all duration-500 ease-out">{philantropy.map((item, index) => (
              <PhilantropyCard
                key={index}
                number={index + 1}
                character={item.character}
                title={item.title}
                description={item.description}
                isActive={activeCard === index + 1}
                onClick={() => handleCardClick(index + 1)}
              />
            ))}</div>
          </div>
          <div className="hidden sticky left-0 h-16 bg-black border-t border-background text-center">
              <button
                className="text-background border-r border-background hover:text-opacity-80 transition duration-300 flex flex-col center size-16"
                onClick={handlePrev}
              >
                <IoIosArrowRoundBack size={24} />
              </button>
              <button
                className="text-background border-r border-background hover:text-opacity-80 transition duration-300 flex flex-col center size-16"
                onClick={handleNext}
              >
                <IoIosArrowRoundForward size={24} />
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philantropy;

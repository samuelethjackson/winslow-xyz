import React from 'react';

interface PhilantropyCardProps {
  number: number;
  title: string;
  character: string;
  description: string;
}

const PhilantropyCard: React.FC<PhilantropyCardProps> = ({ number, title, description, character }) => {
  return (
    <div className="relative h-full w-full flex flex-col gap-4 p-12 pt-24 snap-center justify-between bg-black border-r border-background group hover:bg-background transition-all duration-200 ease-in-out hover:text-black">
      <h2 className="group-hover:text-7xl transition-all duration-200 ease-in-out">{number}</h2>
      <div className="hidden absolute right-12 top-28 center size-16 bg-black border-background border text-background dark:bg-white dark:text-black center rounded-full text-5xl pt-4 group-hover:scale-150 transition-all duration-200 ease-in-out">{character}</div>
      <div className='w-full flex flex-col gap-8'>
        <h4 className="">{title}</h4>
        <p className="h-full">{description}</p>
      </div>
    </div>
  );
};

export default PhilantropyCard;

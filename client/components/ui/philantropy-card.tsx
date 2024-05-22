import React from 'react';

interface PhilantropyCardProps {
  number: number;
  title: string;
  character: string;
  description: string;
  isActive: boolean;
}

const PhilantropyCard: React.FC<PhilantropyCardProps> = ({ number, title, description, character, isActive }) => {
  return (
    <div 
      className={`relative h-full w-full flex flex-col gap-4 p-12 pt-24 snap-center justify-between border-r border-background group ${isActive ? 'bg-background text-black' : ' transition-all duration-1000 ease-in-out'}`}
    >
      <h2 className={`transition-all duration-1000 ease-in-out ${isActive ? '' : 'text-7xl opacity-30'}`}>{number}</h2>
      <div className='w-full h-full flex flex-col gap-8 justify-end'>
        <h4 className={`h-16  ${isActive ? '' : 'opacity-30'}`}>{title}</h4>
        <p className={`h-[25vh] flex flex-col justify-start  ${isActive ? '' : 'opacity-30'}`}>{description}</p>
      </div>
    </div>
  );
};

export default PhilantropyCard;

import React from 'react';

const ModeSwitch: React.FC = () => {
  return (
    <div className="absolute top-0 right-4 md:right-6 row-start-1 col-start-9 size-8 bg-black rounded-full self-start place-self-end overflow-hidden border border-black hover:rotate-180 transition-transform duration-1000 cursor-pointer">
        <div className="bg-background size-8 absolute top-0 left-4"></div>
      </div>
  );
};

export default ModeSwitch;

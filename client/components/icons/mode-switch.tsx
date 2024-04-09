import React from "react";

const ModeSwitch: React.FC = () => {
  return (
    <div className="relative size-6 bg-black rounded-full overflow-hidden border border-black hover:rotate-180 transition-transform duration-1000 cursor-pointer">
      <div className="bg-background size-6 absolute top-0 left-[11px]"></div>
    </div>
  );
};

export default ModeSwitch;

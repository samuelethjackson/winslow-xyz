import React from "react";
import AboutPanel from "./panels/about";
import ContactPanel from "./panels/contact";
import InvestingPanel from "./panels/investing";
import PhilantropyPanel from "./panels/philantropy";

const NavigationBubbles: React.FC = () => {

  return (
    <div className="col-start-1 col-end-10 grid grid-cols-11 md:grid-cols-9 row-start-3 row-span-1 grid-rows-2 h-24 w-full">
      <div className="-rotate-[60deg] md:rotate-0 col-start-1 row-start-2">
        <AboutPanel />
      </div>
      <div className="-rotate-[60deg] md:rotate-0 col-start-3 md:col-start-2 row-start-2">
        <InvestingPanel />
      </div>
      <div className="-rotate-[0deg] md:ml-32 md:mt-1 col-start-7 md:col-start-2 row-start-2 md:row-start-1 md:rotate-[28deg]">
        <ContactPanel />
      </div>
      <div className="-rotate-[60deg] md:rotate-0 col-start-5 row-start-2">
        <PhilantropyPanel />
      </div>
      <div className="hidden col-start-4 row-start-2 size-16 bg-black text-background center rounded-full text-5xl pt-4 self-end">*</div>
    </div>
  );
};

export default NavigationBubbles;

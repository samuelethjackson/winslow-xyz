import React from "react";
import Panel from "../elements/panel";
import PanelSkeleton from "../elements/panel-skeleton";
import LogoCloud from "../elements/logo-cloud";

interface InvestingProps {
  // Define your props here
}

const InvestingPanel: React.FC<InvestingProps> = (props) => {
  // Component logic here

  return (
    <Panel buttonLabel="Investing" updated={true}>
      <PanelSkeleton title="Investing">
        <div className="w-full h-full flex flex-col justify-between gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <LogoCloud />
        </div>
      </PanelSkeleton>
    </Panel>
  );
};

export default InvestingPanel;

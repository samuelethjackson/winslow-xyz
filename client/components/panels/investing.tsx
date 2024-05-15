import React from "react";
import Panel from "./structure/panel";
import PanelSkeleton from "./structure/panel-skeleton";
import LogoCloud from "../ui/logo-cloud";

interface InvestingProps {
  // Define your props here
}

const InvestingPanel: React.FC<InvestingProps> = (props) => {
  // Component logic here

  return (
    <Panel buttonLabel="Investing" updated={true}>
      <PanelSkeleton title="Investing">
        <div className="w-full h-full flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-8">
          <h3>This is what drives me.</h3>
          <h4 className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
          <LogoCloud />
        </div>
      </PanelSkeleton>
    </Panel>
  );
};

export default InvestingPanel;

import React from "react";
import NavigationBubbles from "../navigation-bubbles";
import Avatar from "../avatar";

interface IntroProps {
  title?: string;
  subtitle?: string;
}

const Intro: React.FC<IntroProps> = ({}) => {
  return (
    <section className="h-svh w-full">
      <div className="grid grid-cols-9 grid-rows-5 px-5 md:px-8 py-12 h-full w-full ">
        <div className="col-start-1 col-end-10 row-end-4 md:row-end-6 flex flex-col gap-4 center self-end">
          <NavigationBubbles />
          <h2>
            Accelarating <br />
            humanity through growth.
          </h2>
        </div>
        <Avatar />
      </div>
      <footer className="md:grid grid-cols-9 grid-rows-1 px-8 py-4 w-full h-min z-10">
        <p className="col-start-9 self-end place-self-end row-start-1">
          <a href="mailto:opportunities@winslow.xyz">
            opportunities@winslow.xyz
          </a>
        </p>
        <p className="col-start-6 self-end place-self-end row-start-1">
          <a href="https://linkedin.com">LinkedIn</a>
        </p>
      </footer>
    </section>
  );
};

export default Intro;

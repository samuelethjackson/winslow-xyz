"use client"

import React from "react";
import Panel from "./structure/panel";
import PanelSkeleton from "./structure/panel-skeleton";
import BottomPanel from "./structure/panel-bottom";
import { Drawer } from "vaul";
import CloseIcon from "../icons/close";

interface ContactProps {
  // Define your props here
}

const ContactPanel: React.FC<ContactProps> = (props) => {
  // Component logic here

  return (
    <BottomPanel buttonLabel="Contact" dark={true}>
      <div className="w-full flex flex-col gap-[11vh] items-end p-8">
        <Drawer.Close
            asChild
            className="flex flex-row justify-end text-2xl font-bold uppercase h-8"
          >
            <button className="size-8">
              <CloseIcon color="background" />
            </button>
          </Drawer.Close>
        <div className="w-full h-full flex flex-col center text-white gap-4">
          <p>Give me a shout! I'm ready to chat.</p>
          <a className="big-link">opportunities@winslow.xyz</a>
        </div>
      </div>
    </BottomPanel>
  );
};

export default ContactPanel;

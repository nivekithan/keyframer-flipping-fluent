import React from "react";
import { EmailContainer } from "./emailContainer";
import { Main } from "./main";
import { ToolBar } from "./toolbar";

type FullScreenProps = {
  showContent: boolean;
};

export const FullScreen = ({ showContent }: FullScreenProps) => {
  return (
    <div className="h-full w-full flex ">
      <ToolBar showContent={showContent} />
      <EmailContainer showContent={showContent}  />
      <Main showContent={showContent} />
    </div>
  );
};

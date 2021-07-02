import React from "react";
import { EmailContainer } from "./emailContainer";
import { Main } from "./main";
import { ToolBar } from "./toolbar";

export const FullScreen = () => {
  return (
    <div className="h-full w-full flex ">
      <ToolBar />
      <EmailContainer />
      <Main />
    </div>
  );
};

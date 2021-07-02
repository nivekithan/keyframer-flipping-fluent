import React from "react";
import { ReactComponent as MailIcon } from "~svg/mail.svg";

export const Main = () => {
  return (
    <div className="h-full flex-grow shadow-container">
      <div className="flex flex-col gap-y-20 items-center mt-40">
        <MailIcon width="48px" height="48px" />
        <h1 className="text-5xl font-bold tracking-wide">7 New Emails</h1>
      </div>
    </div>
  );
};

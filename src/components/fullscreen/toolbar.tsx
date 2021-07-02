import React from "react";

import { ReactComponent as Menu } from "~svg/menu.svg";
import { ReactComponent as Plus } from "~svg/plus.svg";
import { ReactComponent as Search } from "~svg/search.svg";
import { ReactComponent as User } from "~svg/user.svg";
import { ReactComponent as Refresh } from "~svg/refresh.svg";

export const ToolBar = () => {
  return (
    <div className="h-full bg-background-gray px-4 opacity-80 py-4 flex flex-col justify-between bg-opacity-50">
      <div className="flex gap-y-12 flex-col">
        <Menu width="16px" height="16px" />
        <div className="flex flex-col gap-y-8">
          <Plus width="16px" height="16px" />
          <User width="16px" height="16px" />
          <Search width="16px" height="16px" />
        </div>
      </div>
      <div>
        <Refresh width="16px" height="16px" />
      </div>
    </div>
  );
};

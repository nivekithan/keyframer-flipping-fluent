import React from "react";
import { animated } from "react-spring";

import { ReactComponent as Menu } from "~svg/menu.svg";
import { ReactComponent as Plus } from "~svg/plus.svg";
import { ReactComponent as Search } from "~svg/search.svg";
import { ReactComponent as User } from "~svg/user.svg";
import { ReactComponent as Refresh } from "~svg/refresh.svg";
import { useFromRightToLeft } from "src/hooks/useFromRightToLeft";

type ToolbarProps = {
  showContent: boolean;
};

export const ToolBar = ({ showContent }: ToolbarProps) => {


  return (
    <div className="h-full bg-background-gray px-4 opacity-80 py-4 flex flex-col justify-between bg-opacity-50">
      {showContent ? (
        <>
          <div className="flex gap-y-12 flex-col">
            <AnimatedIcon index={1}>
              <Menu width="16px" height="16px" />
            </AnimatedIcon>
            <div className="flex flex-col gap-y-8">
              <AnimatedIcon index={2}>
                <Plus width="16px" height="16px" />
              </AnimatedIcon>
              <AnimatedIcon index={3}>
                <User width="16px" height="16px" />
              </AnimatedIcon>
              <AnimatedIcon index={4}>
                <Search width="16px" height="16px" />
              </AnimatedIcon>
            </div>
          </div>
          <div>
            <AnimatedIcon index={7}>
              <Refresh width="16px" height="16px" />
            </AnimatedIcon>
          </div>
        </>
      ) : null}
    </div>
  );
};

type AnimatedIconProps = {
  children: React.ReactNode;
  index: number;
};

const AnimatedIcon = ({ children, index }: AnimatedIconProps) => {
  const style = useFromRightToLeft(index);

  return <animated.div style={style}>{children}</animated.div>;
};

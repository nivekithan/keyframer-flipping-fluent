import React from "react";
import { ReactComponent as MailIcon } from "~svg/mail.svg";
import { useSpring, animated } from "react-spring";

type MainProps = {
  showContent: boolean;
};

export const Main = ({ showContent }: MainProps) => {
  const styles = useSpring({
    from: {
      x: -20,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
    config: {
      friction: 75,
    },
  });

  return (
    <div className="h-full flex-grow shadow-container">
      <div className="flex flex-col gap-y-20 items-center mt-40">
        <AnimatedIcon index={3}>
          <MailIcon width="48px" height="48px" />
        </AnimatedIcon>
        <animated.h1
          className="text-5xl font-bold tracking-wide"
          style={styles}
        >
          7 New Emails
        </animated.h1>
      </div>
    </div>
  );
};

type AnimatedIconProps = {
  children: React.ReactNode;
  index: number;
};

const AnimatedIcon = ({ children, index }: AnimatedIconProps) => {
  const styles = useSpring({
    from: {
      opacity: 0,
      y: -20,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    delay: index * 150,
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

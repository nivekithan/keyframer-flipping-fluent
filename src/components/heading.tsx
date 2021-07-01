import React from "react";
import { useSpring, animated } from "react-spring";
import { useApi } from "./animateContainer";

export const Heading = () => {
  const [{ x }, api] = useSpring(() => ({
    from: {
      x: 0,
    },
    to: {
      x: 20,
    },

    config: {
      friction: 50,
    },
  }));

  return (
    <animated.h1
      className="text-5xl font-bold "
      style={{ transform: x.to((x) => `translateX(${x}%)`) }}
    >
      7 New Mails
    </animated.h1>
  );
};

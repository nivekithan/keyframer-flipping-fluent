import React from "react";
import { useSpring, animated } from "react-spring";
import { AnimateState, useApi } from "./animateContainer";

type HeadingProps = {
  dispatch: React.Dispatch<React.SetStateAction<AnimateState>>;
  state: AnimateState;
};

export const Heading = ({ dispatch, state }: HeadingProps) => {
  const [{ x }, api] = useSpring(() => ({
    from: {
      x: 0,
    },
    to: {
      x: 40,
    },

    config: {
      friction: 75,
    },

    onRest() {
      if (state !== "fullscreen") {
        dispatch("fullscreen");
      }
    },
  }));

  return (
    <animated.h1
      className="text-5xl font-bold tracking-wide "
      style={{ transform: x.to((x) => `translateX(${x}%)`) }}
    >
      7 New Mails
    </animated.h1>
  );
};

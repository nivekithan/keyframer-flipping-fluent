import React from "react";
import { useSpring, animated } from "react-spring";
import { AnimateState, useApi } from "./animateContainer";

type HeadingProps = {
  dispatch: React.Dispatch<React.SetStateAction<AnimateState>>;
  state: AnimateState;
};

export const Heading = ({ dispatch, state }: HeadingProps) => {
  const api = useApi();

  const [{ x }] = useSpring(() => ({
    from: {
      x: 0,
      opacity: 0,
    },
    to: {
      x: 40,
      opacity: 1,
    },

    config: {
      friction: 75,
    },

    onChange(res) {
      if (res.value.x > 32 && state !== "fullscreen") {
        dispatch("fullscreen");
        api.start({ to: { width: 80, height: 80 } });
      }
    },
  }));

  const { opacity } = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      friction: 125,
    },
  });

  return (
    <animated.h1
      className="text-5xl font-bold tracking-wide"
      style={{
        transform: x.to((x) => `translateX(${x}%)`),
        opacity: opacity.to((o) => o),
      }}
    >
      7 New Mails
    </animated.h1>
  );
};

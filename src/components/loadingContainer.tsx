import { AnimateDispatch, AnimateState, useApi } from "./animateContainer";
import React, { useRef } from "react";
import {
  useSpring,
  animated,
  AnimationResult,
  SpringValue,
} from "react-spring";

export type LoadingContainerProps = {
  state: AnimateState;
  dispatch: AnimateDispatch;
};

export const LoadingContainer = ({
  dispatch,
  state,
}: LoadingContainerProps) => {
  return (
    <div className="relative">
      <Tile index={1} dispatch={dispatch} state={state} />
      <Tile index={3} dispatch={dispatch} state={state} />
      <Tile index={4} dispatch={dispatch} state={state} />
      <Tile index={2} dispatch={dispatch} state={state} />
    </div>
  );
};

type TileProps = {
  index: 1 | 2 | 3 | 4;
  dispatch: React.Dispatch<
    React.SetStateAction<"loading-1" | "loading-2" | "data-loaded">
  >;
  state: "loading-1" | "loading-2" | "data-loaded";
};

const Tile = ({ index, dispatch, state }: TileProps) => {
  const api = useApi();

  const animateHeight = useRef(false);

  const { x: x1, ...styles } = useSpring({
    from: {
      x: state === "loading-2" ? 50 : 0,
      skewX: state === "loading-2" ? 0 : 20,
    },

    to: {
      x: state === "loading-2" ? 110 : 50,
      skewX: state === "loading-2" ? 20 : 0,
    },
    reset: true,

    config: {
      tension: 200,
      friction: 30,
      clamp: true,
      mass: 0.5,
    },
    delay: getDelayForTile(index, state === "loading-2"),

    onRest() {
      if (state !== "loading-2" && index === 3) {
        dispatch("loading-2");
        return;
      }

      // if (state === "loading-2" && index === 3) {
      //   dispatch("data-loaded");
      //   return;
      // }
    },

    onChange(res) {
      if (res.value.x >= 105 && index === 3 && !animateHeight.current) {
        animateHeight.current = true;
        api.start({ height: 60 });
      }

      if (res.value.x >= 105 && index === 3 && state === "loading-2") {
        dispatch("data-loaded");
      }
    },
  });

  return (
    <animated.div
      className={`w-full ${getPositionForTile(index)}`}
      style={{ transform: x1.to((x) => `translate(${x}%)`), ...styles }}
    >
      <div className="bg-dark-100 h-2 w-2"></div>
    </animated.div>
  );
};

const getPositionForTile = (index: 1 | 2 | 3 | 4) => {
  switch (index) {
    case 1:
      return "absolute top-0 -left-5";
    case 2:
      return "absolute top-0 -left-2.5";
    case 3:
      return "absolute top-2.5 -left-5";
    case 4:
      return "absolute top-2.5 -left-2.5";
  }
};

const getDelayForTile = (
  index: 1 | 2 | 3 | 4,
  firstPhaseFinished: boolean
): number => {
  switch (index) {
    case 1:
      return firstPhaseFinished ? 400 + getDelayForTile(3, false) : 150;
    case 2:
      return firstPhaseFinished ? 400 + getDelayForTile(4, false) : 0;
    case 3:
      return firstPhaseFinished ? 400 + getDelayForTile(1, false) : 300;
    case 4:
      return firstPhaseFinished ? 400 + getDelayForTile(2, false) : 200;
  }
};

import React, { useState, useEffect, useContext } from "react";
import { LoadingContainer } from "./loadingContainer";
import { useSpring, animated, SpringRef } from "react-spring";
import { Heading } from "./heading";
import { FullScreen } from "./fullscreen/fullscreen";

export type AnimateState =
  | "loading-1"
  | "loading-2"
  | "data-loaded"
  | "fullscreen";

export type AnimateDispatch = React.Dispatch<
  React.SetStateAction<AnimateState>
>;

const apiContext = React.createContext<SpringRef<{
  height: number;
  width: number;
}> | null>(null);

export const useApi = () => {
  const api = useContext(apiContext);

  if (api) {
    return api;
  }

  throw new Error("Call hook useApi inside apiContext Provider");
};

export const AnimateContainer = () => {
  const [state, dispatch] = useState<AnimateState>("loading-1");

  const [{ height: x, width }, api] = useSpring(() => ({
    from: { height: 80, width: 80 },
    config: {
      friction: 75,
    },
  }));

  return (
    <apiContext.Provider value={api}>
      <animated.div
        className={`min-h-[155px] min-w-[310px] bg-white rounded-md flex flex-col justify-center  relative ${
          isStateLoading(state) ? "overflow-hidden" : "items-end"
        }`}
        style={{
          height: x.to((x) => `${x}%`),
          width: width.to((w) => `${w}%`),
        }}
      >
        {/* {isStateLoading(state) ? (
          <LoadingContainer dispatch={dispatch} state={state} />
        ) : state === "data-loaded" ? (
          <Heading state={state} dispatch={dispatch} />
        ) : (
          <FullScreen />
        )} */}

        <FullScreen />
      </animated.div>
    </apiContext.Provider>
  );
};

const isStateLoading = (state: AnimateState) => {
  if (state === "loading-1" || state === "loading-2") {
    return true;
  }

  return false;
};

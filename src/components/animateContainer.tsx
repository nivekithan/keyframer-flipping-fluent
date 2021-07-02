import React, { useState, useEffect, useContext } from "react";
import { LoadingContainer } from "./loadingContainer";
import { useSpring, animated, SpringRef } from "react-spring";
import { Heading } from "./heading";
import { FullScreen } from "./fullscreen/fullscreen";

export type AnimateState =
  | "loading-1"
  | "loading-2"
  | "data-loaded"
  | "fullscreen"
  | "show";

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
  const [state, setState] = useState<AnimateState>("loading-1");

  const [{ height: x, width }, api] = useSpring(
    () => ({
      from: { height: 10, width: 10 },
      config: {
        friction: 90,
      },

      onChange(res) {
        if (res.value.width > 70 && state === "fullscreen") {
          console.log(res)
          setState("show");
        }
      },
    }),
    [state]
  );

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
        {(() => {
          if (isStateLoading(state)) {
            return <LoadingContainer setState={setState} state={state} />;
          }

          if (state === "data-loaded") {
            return <Heading state={state} dispatch={setState} />;
          }

          if (state === "fullscreen") {
            return <FullScreen showContent={false} />;
          }

          if (state === "show") {
            return <FullScreen showContent />;
          }
        })()}
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

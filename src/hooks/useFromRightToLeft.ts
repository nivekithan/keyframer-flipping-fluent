import { useSpring } from "react-spring";

export const useFromRightToLeft = (delay: number) => {
  return useSpring({
    from: {
      x: 20,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
    delay: delay * 150,
  });
};

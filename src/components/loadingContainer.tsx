import React, { useState } from "react";
import { useSpring, animated, useTrail } from "react-spring";

export const LoadingContainer = () => {
  const [firstPhaseFinished, setFirstPhaseFinished] = useState(false);

  return (
    <div className="h-[155px] w-[310px] bg-white rounded-md flex flex-col justify-center overflow-hidden">
      <div className="relative">
        <Tile
          index={1}
          firstPhaseFinished={firstPhaseFinished}
          setFirstPhaseFinished={setFirstPhaseFinished}
        />
        <Tile
          index={2}
          firstPhaseFinished={firstPhaseFinished}
          setFirstPhaseFinished={setFirstPhaseFinished}
        />
        <Tile
          index={3}
          firstPhaseFinished={firstPhaseFinished}
          setFirstPhaseFinished={setFirstPhaseFinished}
        />
        <Tile
          index={4}
          firstPhaseFinished={firstPhaseFinished}
          setFirstPhaseFinished={setFirstPhaseFinished}
        />
      </div>
    </div>
  );
};

type TileProps = {
  index: 1 | 2 | 3 | 4;
  firstPhaseFinished: boolean;
  setFirstPhaseFinished: (s: boolean) => void;
};

const Tile = ({
  index,
  firstPhaseFinished,
  setFirstPhaseFinished,
}: TileProps) => {
  const { x: x1, ...styles } = useSpring({
    from: {
      x: firstPhaseFinished ? 50 : 0,
      skewX: firstPhaseFinished ? 0 : 20,
    },
    to: {
      x: firstPhaseFinished ? 110 : 50,
      skewX: firstPhaseFinished ? 20 : 0,
    },
    config: {
      tension: 200,
      friction: 30,
      clamp: true,
      mass: 0.5,
    },
    delay: getDelayForTile(index, firstPhaseFinished),
    onRest() {
      if (!firstPhaseFinished && index === 3) {
        setFirstPhaseFinished(true);
        return;
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
      return firstPhaseFinished ? 400 + getDelayForTile(3, false) : 250;
    case 2:
      return firstPhaseFinished ? 400 + getDelayForTile(4, false) : 0;
    case 3:
      return firstPhaseFinished ? 400 + getDelayForTile(1, false) : 400;
    case 4:
      return firstPhaseFinished ? 400 + getDelayForTile(2, false) : 300;
  }
};

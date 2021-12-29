/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// https://codepen.io/Ponomarev/pen/yLLXNLN
import { atom, useAtom } from "jotai";
import { RefObject, useEffect, useRef, useState } from "react";
import { Layer, Stage, Text } from "react-konva";
import type { StyledElement } from "@/@types";
import { rootAtom } from "@/states";
import type { AppState } from "@/states";

const useCanvasDimension = (domref: RefObject<HTMLDivElement>) => {
  const [dimension, setDimension] = useState({ width: -1, height: -1 });

  useEffect(() => {
    if (domref.current) {
      setDimension({ width: domref.current.offsetWidth - 10, height: domref.current.offsetHeight });
    }
  }, [domref]);
  return dimension;
};

const handleMouseMoveAtom = atom(null, (_, set, { x, y }: AppState["cursor"]) => {
  set(rootAtom, (pre) => {
    return { ...pre, cursor: { x, y } };
  });
});

export const Canvas = (domProps: Partial<StyledElement<HTMLDivElement>>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { height, width } = useCanvasDimension(ref);
  const [, handleMouseMove] = useAtom(handleMouseMoveAtom);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleMouseMove({ x: e.clientX, y: e.clientY });
  };
  const [textState, setTextState] = useState({ isDragging: true, x: 250, y: 250 });
  return (
    <div {...{ ...domProps, onMouseMove, ref }}>
      <Stage {...{ height, width }}>
        <Layer>
          <Text
            text="Draggable Text"
            x={textState.x}
            y={textState.y}
            draggable
            fill={textState.isDragging ? "green" : "white"}
            onDragMove={(e) => {
              const x = e.target.x();
              const y = e.target.y();
              if (x <= 0 || y <= 0 || x >= width - 90 || y >= height - 15) {
                e.target.stopDrag();
                return;
              }
              setTextState({ x, y, isDragging: true });
            }}
            onDragEnd={() => {
              setTextState({ ...textState, isDragging: false });
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
};

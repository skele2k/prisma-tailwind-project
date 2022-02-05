import React, { MouseEvent, useEffect, useRef, useState } from "react";

type TagProps = {
  children: React.ReactNode;
};

export const Tag: React.FC<TagProps> = ({ children }) => {
  const [pressed, setPressed] = useState(false);
  const [positionY, setPositionY] = useState(0);
  const [zIndex, setZIndex] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(0px, ${positionY}px)`;
    }
  }, [positionY]);

  const onMouseMove = (event: MouseEvent) => {
    if (pressed) {
      setPositionY(positionY + event.movementY);
    }
  };

  return (
    <div
      ref={ref}
      className={`border-radius-1 rounded-xl border border-slate-400 bg-purple-300 px-2 py-1 z-${zIndex}`}
      onMouseMove={onMouseMove}
      onMouseDown={() => {
        setPressed(true);
        setZIndex(10);
      }}
      onMouseUp={() => {
        setPressed(false);
        setZIndex(1);
      }}
    >
      {children}
    </div>
  );
};

import React from "react";
import { Draggable } from "react-beautiful-dnd";

type TagProps = {
  draggableId: string;
  index: number;
  children: React.ReactNode;
};

export const Tag: React.FC<TagProps> = ({ draggableId, index, children }) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          className={`border-radius-1 z-1 rounded-xl border border-slate-400 bg-purple-300 px-2 py-1`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

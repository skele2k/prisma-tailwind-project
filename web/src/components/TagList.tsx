import React, { useEffect, useState } from "react";
import { Tag } from "./Tag";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

interface TagListProps {}

const tagsData: string[] = ["Хичээл", "Математик", "Код бичих"];

export const TagList: React.FC<TagListProps> = ({}) => {
  const [tags, setTags] = useState<string[]>(tagsData);

  const handleOnDragEnd = (result: DropResult) => {
    const items: string[] = Array.from(tags);
    const [reorderedItem] = items.splice(result.source?.index!, 1);
    items.splice(result.destination?.index!, 0, reorderedItem);
    setTags(items);
  };
  const [winReady, setwinReady] = useState(false);

  useEffect(() => {
    setwinReady(true);
  }, []);

  return winReady ? (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tags">
        {(provided) => (
          <div
            className="flex flex-col space-y-2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tags.map((tag, index) => {
              return (
                <Tag key={tag} draggableId={tag} index={index}>
                  {tag}
                </Tag>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  ) : null;
};

import React from "react";
import { Tag } from "./Tag";

interface TagListProps {}

export const TagList: React.FC<TagListProps> = ({}) => {
  return (
    <div className="flex flex-col space-y-2">
      <Tag>Хичээл</Tag>
      <Tag>Математик</Tag>
      <Tag>Код бичих</Tag>
    </div>
  );
};

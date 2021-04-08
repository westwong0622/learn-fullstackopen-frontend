import React from "react";

import CoursePart from "../data/types";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  const listItems = props.courseParts.map((part) => {
    return (
      <li>
        {part.name} {part.exerciseCount}
      </li>
    );
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default Content;

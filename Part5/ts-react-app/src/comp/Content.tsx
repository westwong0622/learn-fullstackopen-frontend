import React from "react";

import Part from "./Part";

import CoursePart from "../data/types";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  const listItems = props.courseParts.map((part) => {
    return (
      <li>
        <Part {...part} />
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

import React from "react";

import CoursePart from "../data/types";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <div>
      <p>
        {props.courseParts[0].name} {props.courseParts[0].exerciseCount}
      </p>
      <p>
        {props.courseParts[1].name} {props.courseParts[1].exerciseCount}
      </p>
      <p>
        {props.courseParts[1].name} {props.courseParts[1].exerciseCount}
      </p>
    </div>
  );
};

export default Content;

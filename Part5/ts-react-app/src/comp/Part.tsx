import React from "react";

import CoursePart from "../data/types";

const Part = (props: CoursePart) => {
  switch (props.type) {
    case "normal":
      return (
        <p>
          {props.name}: {props.description}
        </p>
      );
    case "groupProject":
      return (
        <p>
          {props.name}: {props.groupProjectCount}
        </p>
      );
    case "submission":
      return (
        <p>
          {props.name}: {props.description}, {props.exerciseSubmissionLink}
        </p>
      );
    default:
      return <div></div>;
  }
};

export default Part;

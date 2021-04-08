import React from "react";

interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseNormalPart extends CoursePartBase {
  type: "normal";
  description: string;
}
interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartBase {
  type: "submission";
  description: string;
  exerciseSubmissionLink: string;
}

type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart;

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

import React from 'react';
import CoursePart from './CoursePart';

const Course = ({course}) => {
  const total = course.parts.reduce((s, p) => {
    console.log('what is happening', s, p)
    // var sum = s.exercises + p.exercises
    return { name: 'sum', exercises: s.exercises + p.exercises, id: 0}
  })

  return (
    <li>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => 
          <CoursePart key={part.id} part={part} />
        )}
      </ul>
      {total.exercises}
    </li>
  )
}

export default Course

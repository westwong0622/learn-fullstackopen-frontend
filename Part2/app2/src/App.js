import React from 'react'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        <li>{course.parts[0].name} {course.parts[0].exercises}</li>
        <li>{course.parts[1].name} {course.parts[1].exercises}</li>
        <li>{course.parts[2].name} {course.parts[2].exercises}</li>
      </ul>
      total: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
    </div>
  )
}

export default App

import React from 'react';

const CoursePart = ({part}) => {
  return (
    <li>{part.name} {part.exercises}</li>
  )
}

export default CoursePart

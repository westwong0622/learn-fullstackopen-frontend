import React, { useState } from 'react'

const Note = (props) => {
  return (
    <li>{props.note.name}</li>
  )
}

export default Note

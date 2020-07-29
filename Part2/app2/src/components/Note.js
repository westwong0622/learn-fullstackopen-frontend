import React, { useState } from 'react'

const Note = (props) => {
  return (
    <li>{props.note.content}</li>
  )
}

export default Note

import React from 'react'

const Note = (props) => {
  if(props.note.important) {
    return (
      <li>{props.note.id}: {props.note.content}</li>
    )
  } else {
    return null
  }
}

export default Note

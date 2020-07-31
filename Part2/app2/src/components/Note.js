import React from 'react'

const Note = (props) => {
  if (props.showAll || props.note.important) {
    return (
      <li>{props.note.id}: {props.note.content}: {props.note.important.toString()} <button onClick={props.toggleImportance}>Change</button></li>
    )
  } else {
    return null
  }
}

export default Note

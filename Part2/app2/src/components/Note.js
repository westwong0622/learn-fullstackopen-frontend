import React from "react";

const Note = (props) => {
  if (props.showAll || props.note.important) {
    return (
      <li className="note">
        {props.note.id}: <span>{props.note.content}</span>:{" "}
        {props.note.important.toString()}{" "}
        <button onClick={props.toggleImportance}>Change</button>{" "}
        <button onClick={props.removeNote}>Remove</button>
      </li>
    );
  } else {
    return null;
  }
};

export default Note;

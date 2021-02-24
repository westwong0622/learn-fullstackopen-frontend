import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "./reducers/noteReducer";
import { Link, useParams } from "react-router-dom";

const Note = (props) => {
  const notes = props.notes;

  const id = useParams().id;
  const note = notes.find((n) => n.id === Number(id));

  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div>
        <strong>{note.important ? "important" : "not important"}</strong>
      </div>
    </div>
  );
};

export default Note;

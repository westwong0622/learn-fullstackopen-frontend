import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "./reducers/noteReducer";
import { Link, useParams } from "react-router-dom";

const Note = (props) => {
  const note = props.note;

  return (
    <div>
      <h2>{note.id}</h2>
      <div>{note.content}</div>
      <div>
        <strong>{note.important ? "important" : "not important"}</strong>
      </div>
    </div>
  );
};

export default Note;

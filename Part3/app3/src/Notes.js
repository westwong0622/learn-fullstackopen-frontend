import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "./reducers/noteReducer";
import { Link } from "react-router-dom";

const Notes = (props) => {
  const notes = props.notes;

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.content}</Link>
          </li>
        ))}
      </ul>
      <div>hello</div>
    </div>
  );
};

export default Notes;

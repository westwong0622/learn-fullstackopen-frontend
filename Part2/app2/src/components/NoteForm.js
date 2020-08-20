import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
    console.log(event.target.value);
  };

  const submitNote = (event) => {
    event.preventDefault();
    addNote({
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    });

    setNewNote("");
  };

  return (
    <div>
      <h2>Create a new note</h2>
      <form onSubmit={submitNote}>
        <input value={newNote} onChange={handleChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default NoteForm;

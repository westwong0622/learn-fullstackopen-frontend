import React, { useState } from 'react'
import axios from 'axios';
import Note from './components/Note';

const App = (props) => {
  const [ notes, setNotes ] = useState([])

  const promise = axios
    .get('http://localhost:3001/notes')
    .then(response => {
      const notes = response.data
      setNotes(notes)
    })

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App

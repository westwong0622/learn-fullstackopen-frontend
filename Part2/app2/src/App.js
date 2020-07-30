import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Note from './components/Note';

const App = (props) => {
  const [ notes, setNotes ] = useState([])

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }

  useEffect(hook, [])

  console.log('render', notes.length, 'notes')

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

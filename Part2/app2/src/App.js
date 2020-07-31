import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Note from './components/Note';

import noteService from './services/notes'

const App = () => {
  const [ showAll, setShowAll ] = useState(true)
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState('')

  const hook = () => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
  }

  useEffect(hook, [])

  const newNoteChange = (event) => {
    setNewNote(event.target.value)
    console.log(event.target.value);
  }

  const addNewNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        console.log(returnedNote);
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const showAllChange = (event) => {
    setShowAll(!showAll)
  }

  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')

    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(note => note.id !== id))
      })
  }

  return (
    <div>
      <h2>Notes</h2>
      <div>Show all notes: {showAll.toString()} <button onClick={showAllChange}>Change</button> </div>
      <div>
        <input value={newNote} onChange={newNoteChange}/>
        <button onClick={addNewNote}>Add</button>
      </div>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} showAll={showAll} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
    </div>
  )
}

export default App

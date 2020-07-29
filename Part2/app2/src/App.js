import React, { useState } from 'react'
import Person from './components/Person';

const App = (props) => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName
    }
    setPersons(persons.concat(personObj))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div><button type="submit" onClick={addName}>add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person person={person} />
        )}
      </ul>
    </div>
  )
}

export default App

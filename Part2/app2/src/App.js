import React, { useState } from 'react'
import Person from './components/Person';

const App = (props) => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '17300000000'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if(newName.trim() == '' || newNumber.trim() == ''){
      alert(`no empty input!`)
    } else{
      if(persons.some(person => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
      } else{
        const personObj = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(personObj))
        setNewName('')
        setNewNumber('')
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
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

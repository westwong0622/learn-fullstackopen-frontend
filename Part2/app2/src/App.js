import React, { useState } from 'react'
import axios from 'axios';
import Person from './components/Person';

const promise = axios.get('http://localhost:3001/notes').then(response => {
  console.log(response)
})

const App = (props) => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', show: true},
    { name: 'Ada Lovelace', number: '39-44-5323523', show: true},
    { name: 'Dan Abramov', number: '12-43-234345', show: true},
    { name: 'Mary Poppendieck', number: '39-23-6423122', show: true}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const [ filter, setFilter ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    let personsObj = []
    persons.map(person => {
      if(person.name.includes(event.target.value)) {
        person.show = true
      } else {
        person.show = false
      }
      personsObj.push(person)
      console.log(person);
      return 0
    })
    setPersons(personsObj)
  }

  const addName = (event) => {
    event.preventDefault()
    if(newName.trim() === '' || newNumber.trim() === ''){
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
      <div>filter shown: <input onChange={handleFilterChange} value={filter} /></div>
      <h2>Add a new</h2>
      <form>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit" onClick={addName}>add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App

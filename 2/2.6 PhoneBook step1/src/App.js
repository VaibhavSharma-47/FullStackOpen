import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const rows = ()=> persons.map((person)=><div key={person.name}>{person.name}</div>) 
  const handleNoteChange = (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const addPerson = (event) =>{
    event.preventDefault()
    setPersons(persons.concat({name:newName}))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input 
            value={newName}
            onChange={handleNoteChange}
            />
        <div>
          <button type="submit">add</button>
        </div>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {rows()}
      </div>
    </div>
  )
}

export default App
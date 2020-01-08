import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const rows = ()=> {
    return (persons.map((person)=><div key={person.name}>{person.name}</div>))

  }
  
  const handleNoteChange = (event)=>{
    //console.log(persons.map(indexOf({name: 'Arto Hellas' }))
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const addPerson = (event) =>{
    event.preventDefault()
    //const temp = {name:newName}
    const present = persons.map((person)=>person.name).indexOf(newName)
    console.log(present)
    if (present >=0) {
      window.alert(`${newName} is already added to Phone Book`)
    } else {
      
      setPersons(persons.concat({name:newName}))
    }
    
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
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Phonebook = ({filter,handleFilterChange}) =>{
  return(
    <>
    <h2>Phonebook</h2>
      filter shown with 
      <input
        value={filter}
        onChange={handleFilterChange}
        />
    </>
  )
}
const PersonForm =({addPerson,newName,handleNameChange,newNumber,handleNumberChange})=>{

  return(
    <form onSubmit={addPerson}>
        <div>
          name:
          <input 
            value={newName}
            onChange={handleNameChange}
            />
            <br/>
          number:
          <input 
            value={newNumber}
            onChange={handleNumberChange}
            />
          <br/>
        <div>
          <button type="submit">add</button>
        </div>
        </div>
      </form>
  )
}
const Person =({rows,persontoshow}) =>{
  return(
    <div>
        {rows(persontoshow)}
    </div>
  )
}
const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [filter,setFilter] = useState('')
  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
      .then(response=>{
        console.log(response.data)
        setPersons(response.data)
      })
  },[])
  const persontoshow = filter===''?persons:persons.filter((person)=>{
    let x = person.name.includes(filter)
    return x
  })
  const rows = ()=> {
    
    return (persontoshow.map((person)=><div key={person.name}>{person.name} {person.number}</div>))

  }

  
  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }
  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event)=>{
    //console.log(persons.filter((person)=>(person.name.match(/arto/g)||[]).length))
    setFilter(event.target.value)
  }
  const addPerson = (event) =>{
    event.preventDefault()
    const present = persons.map((person)=>person.name).indexOf(newName)
    //console.log(present)
    if (present >=0) {
      window.alert(`${newName} is already added to Phone Book`)
    } else {
      
      setPersons(persons.concat({name:newName,number:newNumber}))
    }
    
  }


  return (
    <div>
      <Phonebook filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>Add new</h2>
      <PersonForm addPerson={addPerson} value={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      
      <h2>Numbers</h2>
      <Person rows={rows} persontoshow={persontoshow}/>
    </div>
  )
}

export default App
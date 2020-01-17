import React, { useState, useEffect } from 'react'
import personinfo from './services/notes'

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
    personinfo.getAll()
      .then(data=>{
        //console.log("REsponse is ",data)
        setPersons(data)
      })
  },[])
  const persontoshow = filter===''?persons:persons.filter((person)=>{
    let x = person.name.includes(filter)
    return x
  })
  const rows = ()=> {
    console.log(persontoshow.map(person=>person.id))
    return (persontoshow.map((person)=><li key={person.id}>{person.name} {person.number}  <button onClick={handleDelete(person.id)}>Delete</button></li>))

  }
  const handleDelete = (id)=>{
    
    return ()=>{
      console.log("Deleted")
      personinfo.remove(id).then(data=>console.log(data))
      setPersons(persontoshow.filter(p=>p.id!==id))
    }
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
    if (present <=0) {
      const personObject = {
        name:newName,
        number:newNumber
      }
      const temp =  persons.concat({name:newName,number:newNumber})
      personinfo.add(personObject)
        .then(response=>{
          setPersons(temp)
          console.log("Updated db")
        })
    } else if((window.confirm(`${newName} is already added to Phone Book`))){
      const personObject = {
        name:newName,
        number:newNumber
      }
      const id = persons.filter(person=>person.name===newName)
      const temp =persons.map(person=>person.name===newName?{name:newName,number:newNumber,id:id[0].id}:person)
      console.log(id)
      personinfo.update(id[0].id,personObject)
        .then(response=>{
          setPersons(temp)
          console.log("Updated db")
        })
      
    }else{

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
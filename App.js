import React,{ useState, useEffect } from 'react'
import Person from './components_pt2/Person'
import Filter from './components_pt2/Filter'
import PersonForm from './components_pt2/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState([]);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  },[])

  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      date: new Date().toISOString(),
      number: newNumber
    }
    const all_names = persons.map(person => person.name)
    if (all_names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return;
    }
    
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    console.log(personObject)
  }

  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
          )
  

  return (
    <div>
      <h2>Phonebook</h2>
     <Filter filter={filter} onChange={handleFilterChange}/>
      
      <br />
      <h1>Add a New</h1>
      <PersonForm onSubmit={addPerson} persons={{value: newName, onChange: handleNewPerson}}
      number={{value:newNumber, onChange: handleNewNumber}} />
      <h2>Numbers</h2>
       {personsToShow.map ((persons, i) => 
        <Person key={i} person={persons} />
      )}
     

    </div>
  )
}


export default App

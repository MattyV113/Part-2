import { useState } from 'react'
import Person from './components_pt2/Person'
import Filter from './components_pt2/Filter'
import PersonForm from './components_pt2/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState([]);
  const [filter, setFilter] = useState('')


  
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
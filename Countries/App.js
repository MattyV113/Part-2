import React, {useState, useEffect} from 'react';
import Filter from './components_pt2/Filter.js'
import axios from 'axios';
import Countries from './components_pt2/Countries';


const App = () => {
  const [countries,setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v2/all')
    .then(response => {
      setCountries(response.data)

    }, [])
  })




  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value)
  }

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase()))

  return (
    <div>
    <Filter filter={searchFilter} onChange={handleSearchFilter} />
    <Countries filteredCountries={filteredCountries} onClick={handleSearchFilter}/>
    </div>
    
  )
}


export default App
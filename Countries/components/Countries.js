import React from "react";
import Country from "./Country";
import SingleCountry from "./SingleCountry"
import Weather from "./Weather";

const Countries = ({filteredCountries, onClick}) => {

  if (filteredCountries.length > 10) {
    return (
      <div >
        <span>Too many matches, specify another filter.</span>
      </div>
    );
  } else if (filteredCountries.length > 1 && filteredCountries.length < 10) {
    return (
      <div >
           {filteredCountries.map(country => 
    <div key={country.name}>
         <Country name={country.name}/> 
         <button value={country.name} onClick={onClick}>show</button>
      </div>)}
      </div>
    );
  } else if (filteredCountries.length === 1) {
    return (
      <div>
        {filteredCountries.map(country => (
          <SingleCountry key={country.name} country={country} />
      
        ))}
        <h1 key={filteredCountries.name}>Weather in {filteredCountries.name}</h1>
          <Weather key={filteredCountries.name} country={filteredCountries} />
       </div>
    );
  } else {
    return <></>;
  }
};

export default Countries

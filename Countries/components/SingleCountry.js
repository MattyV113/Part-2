import React from "react"; 


const SingleCountry = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Population: {country.population}</p>
            <br />
            Languages: {country.languages.map(c => 
            <li key={c.name}>{c.languages}</li>)}
            <br />
            <img src={country.flag} alt="" height="250" width="350" />
        
            


        </div>
    )
}

export default SingleCountry
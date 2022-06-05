import React, {useState} from 'react'


const Country = ({name, population, capital, flag}) => {
    return (
        <div>
            <ul>
            <span>{name}</span>
            <br />
            <span>{capital}</span>
            <br />
            <span> {population}</span>
            <br />
            <img src={flag} alt="No flag found" height="250" width="350" />
            </ul>
        </div>
    )
}


export default Country
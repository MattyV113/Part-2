import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        axios
            .get('http://api.weatherapi.com/v1/current.json?key=7a195b02709d4428824184331220306&q=London&aqi=no')
            .then((response) => {
                setWeather(response.data.current)
                setIcon(response.data.current.condition.icon)
            })
    }, [country])

        return (
            <div>
                <p>temperature: {weather.temp_f} Fahrenheit</p>
                <img src={icon} alt='no icon found' />
                <p>wind: {weather.wind_mph} mph</p>
            </div>
        )
    } 


export default Weather
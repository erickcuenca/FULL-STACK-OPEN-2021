import axios from "axios";
import React, {useState, useEffect} from "react";

const CountryInfo = ({country}) => {
    const [conditions, setConditions] = useState({current: {condition: {icon: ""}, temp_f: ""}})
    
    useEffect(() => {
        const params = {key: "cd723d03858b44c686912029212210", q: country.capital}
        axios
            .get("http://api.weatherapi.com/v1/current.json", {params})
            .then((response) => {
                setConditions(response.data)
            })
            // eslint-disable-next-line
    }, []) 
    return (
        <div>
            <h2>{country.name}</h2>
            <img src={country.flag} alt={country.name + "'s flag."} height="200" width="300"></img>
            <br />
            <p>Capital: {country.capital}, {conditions.current.temp_f}°F</p>
            <img src={conditions.current.condition.icon} alt="Weather conditions icon"></img>
            <p>Languages:</p>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
        </div>
    )
}

export default CountryInfo
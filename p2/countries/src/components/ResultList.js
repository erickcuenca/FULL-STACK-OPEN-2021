import React, {useState, useEffect} from "react";
import CountryInfo from "./CountryInfo";
const ResultList = ({searchValue, countryList}) => {
    const [display, setdisplay] = useState("Search for a country...")
        const filteredList = countryList.filter(country => country.name.toLowerCase().includes(searchValue.toLowerCase()));
    
    useEffect(() => {
        if(searchValue.length === 0){
            setdisplay (
                <div>
                    <p>Search for a country...</p>
                </div>
            )
        }
        else if(filteredList.length === 0) {
            setdisplay (
                <div>
                    <p>No results...</p>
                </div>
            )
        }
        else if(searchValue.length !== 0 && filteredList.length > 10){
            setdisplay (
                <div>
                    <p>Be more specific...</p>
                </div>
            )
        }
        else if(searchValue.length !== 0 && filteredList.length <= 10 && filteredList.length > 1){
            setdisplay (
                <div>
                    {filteredList.map(country => {
                        return (
                            <div key={country.name}>
                                <label>{country.name} </label> 
                                <button onClick={() => setdisplay(<CountryInfo country={country} />)}>View</button>
                            </div>
                        )
                        })
                    }
                </div>
            )
        }
        else if(searchValue.length !== 0 && filteredList.length === 1){
            setdisplay (
                <div>
                    <CountryInfo country={filteredList[0]} />
                </div>
            )
        }
    // eslint-disable-next-line
    }, [searchValue])
    return (
        <div>
            {display}
        </div>
    )
}

export default ResultList
import React, {useEffect, useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import axios from 'axios'
import ResultList from './components/ResultList';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [countryList, setCountryList] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then(response => {
        setCountryList(response.data)
      })
  }, []) 

  return (
    <div>
      <h1>Country Wiki</h1>
      <SearchBar 
        searchValue={searchValue} 
        setSearchValue={(value) => setSearchValue(value)} />
      <br />
      <ResultList
        searchValue={searchValue}
        countryList={countryList} />
    </div>
  )
}

export default App;

import React, { useState, useEffect } from 'react'
import AddNote from './components/AddNote';
import List from './components/List';
import axios from 'axios';
import Important from './components/Important';

const App = () => {

  const [textVal, setTextVal] = useState("");
  const [list, setList] = useState([]);
  const packagedSetList = (val) => {
    setList(val);
  }
  const [button, setButton] = useState(true)

  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then(response => {
        setList(response.data)
      })
  }, [])

  return (
    <div>
    <h1>Notes</h1>
      <Important 
        button={button}
        setButton={(val) => setButton(val)}
      />
      <List 
        list={list}
        setList={packagedSetList}
        button={button}
      />
      <AddNote 
        textVal={textVal}
        setTextVal={(val) => setTextVal(val)}
        list={list}
        setList={(val) => setList(val)}
        />
    </div>
  )
}

export default App 

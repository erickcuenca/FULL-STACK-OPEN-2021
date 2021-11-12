import axios from "axios";
import React from "react";

const AddNote = ({textVal, setTextVal, list, setList}) => {
    return (
        <div>
            <input 
                value={textVal} 
                type="text" 
                onChange={(e) => setTextVal(e.target.value)}
                >
            </input>
            <button 
                onClick={() => {
                    const noteObject = {
                            id: list.length + 1,
                            content: textVal,
                            date: Date().toString(),
                            important: false
                        }
                    axios
                        .post("http://localhost:3001/notes", noteObject);
                    axios
                        .get("http://localhost:3001/notes")
                        .then(response => {
                            setList(response.data)
                        })
                    setTextVal("")       
                }
            }>
            +</button>
        </div>
    )
}

export default AddNote
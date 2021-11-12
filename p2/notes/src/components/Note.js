import axios from "axios";
import React from "react";

const Note = ({note, setList}) => {
    let importantNoteStyle;
    note.important === true ? importantNoteStyle = { color: "red" } : importantNoteStyle = {}
    return (
        <div>
            <li style={importantNoteStyle}>{note.content} </li>
            <button
                onClick={() => {
                    const url = 'http://localhost:3001/notes/' + note.id;
                    const updatedNote = {...note, important: !note.important}
                    axios
                        .put(url, updatedNote);
                    axios
                        .get("http://localhost:3001/notes")
                        .then(response => {
                            setList(response.data);
                        });
                }}
            >{note.important ? "remove importance" : "make important"}</button>
        </div>
    )
}
export default Note
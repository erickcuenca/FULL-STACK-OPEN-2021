import React from "react";
import Note from "./Note";

const List = ({list, setList, button}) => {
    const packagedSetList = (val) => {
        setList(val)
    }
    if(button === true) {
        const filteredList = list.filter(note => note.important)
        return (
            <div>
                <ul>
                    {filteredList
                        .map(note => 
                            <Note 
                                key={note.id} 
                                note={note} 
                                setList={packagedSetList}    
                                /> )
                    }
                </ul>
            </div>
        )
    }
    else {
        return (
            <div>
                <ul>
                    {list
                        .map(note => 
                            <Note 
                                key={note.id} 
                                note={note} 
                                setList={packagedSetList}    
                                /> )
                    }
                </ul>
            </div>
        )
    }
}

export default List
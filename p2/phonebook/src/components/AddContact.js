import axios from "axios";
import React, {useState} from "react";

const AddContact = ({packagedSetContactList, contactList, setNotification, notificationRef}) => {
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(contactList.every(contact => contact.name.toLowerCase().trim() !== nameValue.toLowerCase().trim())) {

            axios
                .post("http://localhost:3001/contacts", {name: nameValue.trim(), number: numberValue, id: nameValue });
            axios
                .get("http://localhost:3001/contacts")
                .then((response) => {
                    packagedSetContactList(response.data)
                })
            setNotification("Added " + nameValue.trim());
            notificationRef.current.classList.remove("fadeInOutAdd");
            notificationRef.current.classList.remove("fadeInOutDelete");
            void notificationRef.current.offsetWidth;
            notificationRef.current.classList.add("fadeInOutAdd");
        }
        else {
            alert(nameValue.trim() + " is already a contact.");
        }
        
        setNameValue("");
        setNumberValue("");

    }

    return (
        <div className="add">
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name..." type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)}></input>
                <br />
                <input placeholder="Number..."type="text" value={numberValue} onChange={(e) => setNumberValue(e.target.value)}></input>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddContact
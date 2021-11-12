import axios from "axios";
import React from "react";

const Contact = ({contact, packagedSetContactList, setNotification, notificationRef}) => {
    const url = "http://localhost:3001/contacts/" + contact.id
    
    const deleteContact = () => {
        if(window.confirm("Delete " + contact.name + "?")){
            axios
                .delete(url);
            setTimeout(() => {
                axios
                .get("http://localhost:3001/contacts")
                .then((response) => {
                    packagedSetContactList(response.data)
                })
                setNotification("Removed " + contact.name)
                notificationRef.current.classList.remove("fadeInOutAdd");
                notificationRef.current.classList.remove("fadeInOutDelete");
                void notificationRef.current.offsetWidth;
                notificationRef.current.classList.add("fadeInOutDelete");    
            }, 250);
        }
    }
    return (
        <div className="contact">
        <button className="delete" onClick={deleteContact}>Delete</button>
            <label className="bold">{contact.name} </label>
            <label>{contact.number}</label>
        </div>
    )
}

export default Contact
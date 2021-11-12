import React from "react";
import Contact from "./Contact";

const SearchResult = ({contactList, searchValue, packagedSetContactList, setNotification, notificationRef}) => {
    const resultList = contactList.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()) || contact.number.includes(searchValue));
    return (
        <div className="results">
            {resultList.map(contact => <Contact key={contact.id} notificationRef={notificationRef} setNotification={(value) => setNotification(value)} contact={contact} packagedSetContactList={(val) => packagedSetContactList(val)} />)}
        </div>
    )
}

export default SearchResult

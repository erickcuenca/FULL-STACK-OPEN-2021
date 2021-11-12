import React, {useState, useEffect, useRef} from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import AddContact from "./AddContact";
import Notification from "./Notification";
import axios from "axios";


const Phonebook = () => {
    const [contactList, setContactList] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [notification, setNotification] = useState("Wow")
    const notificationRef = useRef(null);

    useEffect(() => {
        axios
            .get("http://localhost:3001/contacts")
            .then((response) => {
                setContactList(response.data)
            })
    }, [])
    return (
        <div>
            <Notification notification={notification} notificationRef={notificationRef} />
            <h1>Phone Book ☎️</h1>
            <div className="content">
                <SearchBar packagedSetSearchValue={(value) => setSearchValue(value)} />
                <AddContact contactList={contactList} packagedSetContactList={(value) => setContactList(value)} setNotification={(value) => setNotification(value)} notificationRef={notificationRef} />
            </div>
            <div className="resultContainer">
                <SearchResult notificationRef={notificationRef} contactList={contactList} searchValue={searchValue} packagedSetContactList={(value) => setContactList(value)} setNotification={(value) => setNotification(value)} />
            </div>
        </div>
    )
}

export default Phonebook
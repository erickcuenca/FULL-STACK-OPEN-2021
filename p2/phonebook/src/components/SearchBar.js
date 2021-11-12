import React, {useState} from "react";

const SearchBar = ({packagedSetSearchValue}) => {
    const [searchValueHandle, setSearchValueHandle] = useState("")

    return (
        <div className="searchBar">
            <input placeholder="Search..." type="text" value={searchValueHandle} onChange={(e) => {
                setSearchValueHandle(e.target.value);
                packagedSetSearchValue(e.target.value);
            }}></input>
        </div>
    )
}

export default SearchBar
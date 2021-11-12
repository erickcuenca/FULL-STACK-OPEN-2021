import React from "react";

const SearchBar = ({setSearchValue, searchValue}) => {
    return (
        <div>
            <label>Search: </label>
            <input type="text" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}></input>
        </div>
    )
}

export default SearchBar;
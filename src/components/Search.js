import React from "react";

function Search({ handleSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => handleSearchChange(event)}
      />
    </div>
  );
}

export default Search;

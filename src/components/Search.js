// import { useState } from "react";
import React from "react";

function Search({searchTerm ,onSearchTerm}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearchTerm (e.target.value)}
      />
    </div>
    

  );
}

export default Search;

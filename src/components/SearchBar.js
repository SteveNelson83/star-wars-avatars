import React from 'react';
import "../styles.css";

const SearchBar =  ({input:keyword, onChange:setKeyword}) => {
  return (
    <input 
     className="searchBar"
     key="random1"
     value={keyword}
     placeholder={"search characters"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar
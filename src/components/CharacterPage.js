import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Characters from "./Characters";
import "../styles.css";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [characterList, setCharacterList] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [pagesOfCharacters, setPages] = useState();
  
  let characterPages = [];
  const pageNumbers = [...Array(9).keys()].slice(1);

  const getFirstPageData = async () => {
    await fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        characterPages.push(data.results);
        setDisplayedCharacters(data.results);
      });
    getAllData();
  };

  function setPageNumber(page){
    console.log(pagesOfCharacters);
    setDisplayedCharacters(pagesOfCharacters[page-1]);
  }

	const getAllData = async () => {
		for (let i = 2; i < 10; i++) {
			await fetch("https://swapi.dev/api/people/?page=" + i)
      .then((response) => response.json())
      .then((data) => {
        characterPages.push(data.results);
        setPages(characterPages);
      });
		}
    const mergedArrays = [];
    characterPages.forEach((x) => {
      mergedArrays.push(...x);
    });
		setCharacterList(mergedArrays);
	}

  const updateInput = (input) => {
    input.length > 0 ? setShowSearch(true) : setShowSearch(false);
    const filtered = characterList.filter((character) => {
      return character.name.toLowerCase().includes(input.toLowerCase());
    });
    setSearchInput(input);
    setSearchResults(filtered);
  };

  useEffect(() => {
    getFirstPageData();
  }, []);

  return (
    <>
      <div className="heading">Star Wars Casting Couch</div>
      <div className="container">
        <div className="searchBox">
          <div className="subHeading">Search by Name</div>
          <SearchBar input={searchInput} onChange={updateInput} />
        </div>
        <div className="charactersContainer">
          <div className="subHeading">Characters</div>
          <div className="pageNumbers">Page Number
        {pageNumbers.map((page) => {
          return (
            <button onClick={() => setPageNumber(page)} key={page}>
              {page}
            </button>
          );
        })}
      </div>
          <div className="characters">
            {showSearch ? (
              <Characters characters={searchResults} />
            ) : (
              <Characters characters={displayedCharacters} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;

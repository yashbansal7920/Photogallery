import React from "react";
import "./searchbar.css";

const SearchBar = ({ query, setQuery, setImages, setPage }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <div>
        <h1 className="header">Image Grid</h1>
      </div>
      <div className="searchbar-container">
        <i className="material-icons">search</i>
        <input
          placeholder="Search free high resolution photos"
          value={query}
          onChange={handleChange}
          className="searchbar"
        />
      </div>
    </>
  );
};

export default SearchBar;

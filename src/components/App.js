import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import useFetchImages from "../hooks/useFetchImages";
import Images from "./Images/Images";

const App = () => {
  const [query, setQuery] = useState("");
  const { loading, images, setImages } = useFetchImages(query);

  return (
    <>
      <SearchBar setImages={setImages} query={query} setQuery={setQuery} />
      <Images images={images} />
    </>
  );
};

export default App;

import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import useFetchImages from "../hooks/useFetchImages";
import Images from "./Images/Images";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, images, setImages } = useFetchImages(query, page);

  return (
    <>
      <SearchBar
        setPage={setPage}
        setImages={setImages}
        query={query}
        setQuery={setQuery}
      />
      <Images loading={loading} page={page} setPage={setPage} images={images} />
    </>
  );
};

export default App;

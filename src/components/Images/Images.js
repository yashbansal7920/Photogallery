import React, { useRef, useEffect, useCallback } from "react";
import "./Images.css";
import { CircularProgress } from "@mui/material";

const Images = ({ images, loading, setPage }) => {
  const loader = useRef();

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) setPage((prev) => prev + 1);
    },
    [setPage]
  );

  useEffect(() => {
    const options = { root: null, rootMargin: "20px", threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  console.log(images);

  return (
    <>
      <div className="gallery">
        {images.map((i) => (
          <img
            className="pics"
            key={i.id}
            src={`https:farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`}
            alt={i.title}
          />
        ))}
      </div>
      {loading && (
        <div className="loader">
          <CircularProgress size={70} />
        </div>
      )}
      {/* {images.length && <div ref={loader} />} */}
      <div ref={loader} />
    </>
  );
};

export default Images;

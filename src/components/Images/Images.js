import React from "react";
import "./Images.css";

const Images = ({ images }) => {
  console.log(images);
  return (
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
  );
};

export default Images;

import React from "react";

const Images = ({ images }) => {
  console.log(images);
  return (
    <div>
      {images.map((i) => (
        <img
          key={i.id}
          src={`https:farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`}
          alt={i.title}
        />
      ))}
    </div>
  );
};

export default Images;

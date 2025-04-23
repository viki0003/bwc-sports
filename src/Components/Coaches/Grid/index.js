import React from "react";
import "./style.css";
const ImageGrid = () => {
  // Sample dynamic data
  const data = [
    { id: 1, title: " ", image: "" },
    { id: 2, title: "", image: "https://via.placeholder.com/343x405" },
    { id: 3, title: "", image: "https://via.placeholder.com/343x405" },
    { id: 4, title: "", image: "https://via.placeholder.com/343x405" },
    { id: 5, title: "", image: "https://via.placeholder.com/343x405" },
    { id: 6, title: "", image: "https://via.placeholder.com/343x405" },
    { id: 7, title: "", image: "https://via.placeholder.com/343x405" },
    { id: 8, title: "", image: "https://via.placeholder.com/343x405" },
    { id: 9, title: "", image: "https://via.placeholder.com/343x405" },
  ];

  return (
    <div className="grid-container">
      {data.map((item) => (
        <div className="grid-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

import React, { useState } from "react";
import "./style.css";

export const ChildImageContainer = ({ image, name }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected((prev) => !prev);
  }
  return (
    <>
      <div
        className={`child-container-border ${isSelected ? "selected" : ""}`}
        onClick={handleClick}
      >
        <div className="child-image-container">
          {isSelected && <div className="child-svg-overlay"></div>}
          <img src={image} alt="SampleImage" />
          <div className="child-overlay">
            <p className="child-overlay-text age">12 Yo</p>
            <p className="child-overlay-text">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

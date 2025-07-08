import React, { useState } from "react";
import { MEDIA_BASE_URL } from "../../../Config/Config";
import DefaultImage from "../../../Assets/Images/child.png";
import "./style.css";

export const ChildImageContainer = ({ image, name, age }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected((prev) => !prev);
  }

  const childPImage =
  typeof image === "string" && image.startsWith("http")
    ? image
    : image
    ? `${MEDIA_BASE_URL}${image}`
    : DefaultImage;

  return (
    <div
      className={`child-container-border ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div className="child-image-container">
        {isSelected && <div className="child-svg-overlay"></div>}
        <img src={childPImage} alt={name} />
        <div className="child-overlay">
          <p className="child-overlay-text age">{age} Yo</p>
          <p className="child-overlay-text">{name}</p>
        </div>
      </div>
    </div>
  );
};

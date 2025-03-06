import React from "react";
import "./style.css"; // Import the CSS file

export default function EllipseCard({ imageSrc, text }) {
  return (
    <div
      className="ellipse-container"
      style={{
        backgroundImage: `url(${imageSrc})`,
      }}
    >
      <div className="ellipse-overlay-text">{text}</div>
    </div>
  );
}

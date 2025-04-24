import React from "react";
import "./featureButton.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-buttons-container">
        <button className="feature-button">Customize Your Dream Party</button>
        <button className="feature-button">
          Options for Pizza, Catered Food, T-shirts, Gift Bags,and More!
        </button>
        <button className="feature-button">
          Let Us Help You Plan a Memorable Birthday Celebration!
        </button>
        <button className="feature-button">Book Your Party Today!</button>
      </div>
    </section>
  );
};

export default FeatureSection;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingBlock = ({ title, price, features, image, color }) => {
  return (
    <div className={`cpl-item ${color}`}>
      <h4>{title}</h4>
      <div className="cpl-item-content">
        <h5>{price}</h5>
        <ul className="cpl-item-list">
          {features.map((feature, index) => (
            <li key={index}>
              <span className="cpl-check-icon">
                <FaCheckCircle />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="more-info">More Info</button>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default PricingBlock;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingBlock = ({
  title,
  price,
  features,
  image,
  color,
  text,
  billingType,
  isPopular,
}) => {
  return (
    <div className={`cpl-item ${color}`}>
      <h4>{title}</h4>
      <div className="cpl-item-content">
        {isPopular && <div className="most-popular-badge">Most Popular</div>}
        <h5 className={`price-text ${color}`}>{price}</h5>
        <p className={`per-month ${color}`}>{billingType}</p>
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
        <p className={`plan-text ${color}`}>{text}</p>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default PricingBlock;

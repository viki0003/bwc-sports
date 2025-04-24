import React from 'react'
import RecessPImage from "../../../Assets/Images/recess-p-img.png";
import PricingBlock from "../../SchoolPrograms/ChoosePlans/PricingBlock";
import './chooseplans.css'
export default function ChoosePlans() {
    const plans = [
        {
          color: "blue",
          title: "Elementary Full Grade",
          price: "$ 3,200",
          features: [
            "Choose from a variety of activities",
            "DJ included",
            "Up to 4.5 hours of activities",
            "One-hour lunch break included",
            "8:30am-2:30pm",
            "Up to 180 students",
          ],
          image: RecessPImage,
        },
        {
          color: "blue",
          title: "Elementary Whole School",
          price: "$ 4,000",
          features: [
            "Choose from a variety of activities",
            "DJ included",
            "Up to 4.5 hours of activities",
            "One-hour lunch break included",
            "8:30am-2:00pm",
            "Up to 300 students",
          ],
          image: RecessPImage,
        },
        {
          color: "blue",
          title: "Intermediate Full Grade",
          price: "$ 4,800",
          features: [
            "Choose from a variety of activities",
            "DJ included",
            "Up to 4.5 hours of activities",
            "One-hour lunch break included",
            "8:30am-2:00pm",
            "Up to 300 students",
          ],
          image: RecessPImage,
        },
      ];
    
      return (
        <div className="choose-plans">
          <div className="choose-plans-heading">
            <h2>Choose Your Plan</h2>
          </div>
    
          <div className="choose-plans-list">
            {/* <div className="cpl-item">
              <h4>Recess Package #1</h4>
              <div className="cpl-item-content">
                <h5>$ 1,175</h5>
                <ul className="cpl-item-list">
                  <li>
                    <span className="cpl-check-icon">
                      <FaCheckCircle />
                    </span>
                    Based on 3 lunch periods
                  </li>
                  <li>
                    <span className="cpl-check-icon">
                      <FaCheckCircle />
                    </span>
                    1 or more sessions pricing
                  </li>
                  <li>
                    <span className="cpl-check-icon">
                      <FaCheckCircle />
                    </span>
                    $1,175 for three instructors
                  </li>
                  <li>
                    <span className="cpl-check-icon">
                      <FaCheckCircle />
                    </span>
                    $1,025 for two instructors
                  </li>
                </ul>
                <button className="more-info">More Info</button>
                <img src={RecessPImage} alt="recess" />
              </div>
            </div> */}
            {plans.map((plan, index) => (
              <PricingBlock
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                image={plan.image}
                color={plan.color}
              />
            ))}
          </div>
        </div>
      );
}

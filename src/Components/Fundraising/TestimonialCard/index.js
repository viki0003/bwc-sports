import React from "react";
import "./style.css";
import BasketballKids from "../../../Assets/Images/Fundraising_Testimonial.png";
import Basketball from "../../../Assets/Images/Funraising_img1.png"; 

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-text">
        <p className="quote">
          We Raised Over $10,000 last year! Swish & Wish
          <br />
          made it easy and fun for everyone involved.
        </p>
        <p className="author">- Bright Future Academy</p>
      </div>
      <div className="testimonial-image1">
        <img src={Basketball} alt="Basketball" />
      </div>
      <div className="testimonial-image2">
        <img src={BasketballKids} alt="Kids playing basketball" />
      </div>
    </div>
  );
};

export default TestimonialCard;

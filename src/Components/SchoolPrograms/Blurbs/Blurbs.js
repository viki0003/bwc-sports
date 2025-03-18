import React from "react";
import BlurbImage from "../../../Assets/Images/Football-wave.png";
import "./blurbs.css";

const Blurbs = () => {
  return (
    <div className="sp-blurbs">
      <p>
        BWC is a licensed DOE vendor with over 5 years of experience working
        within the NYC school system. We have served thousands of students each
        in both public and private schools, our DOE Vender is #BEC214306.
      </p>
      <div className="sp-blurbs-list">
        <div className="sp-blurb-item">
          <span>Recess</span>
          <img src={BlurbImage} alt="BlurbImage" />
        </div>
        <div className="sp-blurb-item">
          <span>Sports & Rec Day</span>
          <img src={BlurbImage} alt="BlurbImage" />
        </div>
        <div className="sp-blurb-item">
          <span>Fun Day</span>
          <img src={BlurbImage} alt="BlurbImage" />
        </div>
        <div className="sp-blurb-item">
          <span>Skills & Drills</span>
          <img src={BlurbImage} alt="BlurbImage" />
        </div>
      </div>
      <button className="sp-blurb-btn">Download School Programs PDF</button>
    </div>
  );
};
export default Blurbs;

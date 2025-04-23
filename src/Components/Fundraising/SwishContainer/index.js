import React from "react";
import "./style.css";
import img from "../../../Assets/Images/Swish&Wish.png";

const FlyerComponent = () => {
  return (
    <div className="flyer-container">
      <div className="flyer-section">
        <img
          src={img} // Use curly braces to reference the imported image
          alt="Swish & Wish Fundraising Flyer"
          className="flyer-image"
        />
      </div>
      <div className="video-section">
        <div className="video-player">
          {/* Replace with your video source or use a video player library */}
          <video controls>
            <source src="path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default FlyerComponent;

import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../../Assets/Images/Coaches_banner.png";
import LeftIcon from "../../../Assets/Icons/LeftIcon";

import "./style.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner-image" />

      <div className="banner-content">
        <Link to="">
          <LeftIcon />
        </Link>
        <h1>Coaches</h1>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import LeftIcon from "../../../Assets/Icons/LeftIcon";

const BannerSection = () => {
  return (
    <div className="sp-banner">
      <div className="sp-banner-content">
        <Link to="">
          <LeftIcon />
        </Link>
        <h1>School Programs</h1>
      </div>
    </div>
  );
};

export default BannerSection;

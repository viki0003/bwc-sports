import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import LeftIcon from "../../../Assets/Icons/LeftIcon";

const Banner= () => {
  return (
    <div className="sp-banner sc-banner">
      <div className="sp-banner-content sc-banner-content">
        <Link to="">
          <LeftIcon />
        </Link>
        <h1>School Programs</h1>
      </div>
    </div>
  );
};

export default Banner;

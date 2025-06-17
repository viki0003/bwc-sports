import React from "react";
import { ChildImageContainer } from "../../Components/AddAChild/ChildImageContainer";
import child_image from "../../Assets/Images/child.png";
import BackIcon from "../../Assets/Icons/BackIcon";
import "./style.css";
import AddIcon from "../../Assets/Icons/AddIcon";
import NavbarCustom from "../../Components/NavbarCustom";

export default function AddAChild() {
  return (
    <>
      <NavbarCustom />
      <div className="add-child-container">
        <div className="add-child-header">
          <span className="add-child-backIcon">
            <BackIcon />
          </span>
          <div className="add-child-header-content">
            <h1 className="add-child-heading">For Whom You Are Purchasing?</h1>
            <p>Choose a Sport for Your Child</p>
          </div>
        </div>

        <div className="add-child-image-container">
          <ChildImageContainer image={child_image} name="Arron" />
          <div className="adding-image-container">
            <span className="adding-icon">
              <AddIcon />
            </span>
            <p className="child-overlay-text adding-child-text">
              Add Another Child
            </p>
          </div>
        </div>
        {/* <div className="add-child-submit-button">
          <button type="submit" className="p-submit-button add-child-btn">
            Proceed
          </button>
        </div> */}
      </div>
    </>
  );
}

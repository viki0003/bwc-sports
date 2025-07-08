import React, { useEffect } from "react";
import { ChildImageContainer } from "../../Components/AddAChild/ChildImageContainer";
import BackIcon from "../../Assets/Icons/BackIcon";
import NavbarCustom from "../../Components/NavbarCustom";
import AddIcon from "../../Assets/Icons/AddIcon";
import { Link } from "react-router-dom";
import { usePlayerAccount } from "../../APIContext/PlayerAccountContext";
import "./style.css";

export default function AddAChild() {
  const { players, fetchPlayers } = usePlayerAccount();

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

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
          {players.length > 0 ? (
            players.map((child, index) => (
              <ChildImageContainer
                key={index}
                image={child.profile_picture}
                name={child.name}
                age={child.age}
              />
            ))
          ) : (
            <p>No children found. Please add one.</p>
          )}

          <Link to="/add-child-form" className="adding-image-container">
            <span className="adding-icon">
              <AddIcon />
            </span>
            <p className="child-overlay-text adding-child-text">
              Add Another Child
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

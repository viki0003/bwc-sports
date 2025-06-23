import React, { useEffect } from "react";
import EditFillIcon from "../../../Assets/Icons/EditFillIcon";
import PenIcon from "../../../Assets/Icons/PenIcon";
import DefaultImage from "../../../Assets/Images/child.png";
import PageTitle from "../../../Components/Layout/UserDashLyout/PageTitle";
import { usePlayerAccount } from "../../../APIContext/PlayerAccountContext";
import "./yourplayer.css";

const YourPlayers = () => {
  const { players, fetchPlayers } = usePlayerAccount();

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return (
    <>
      <PageTitle
        title="Your Players"
        description="View and manage the children linked to your account. Add new players and track their activities."
        showDescription={true}
        showButton={true}
        buttonText="Add a Player"
        buttonLink="/add-a-child"
      />
      {players.length === 0 ? (
        <p>No players found.</p>
      ) : (
        players.map((player, index) => (
          <div className="profile-container player-container" key={index}>
            <div className="player-wrapper">
              <div className="player-header">
                {/* <h2>{player.name || `Player ${index + 1}`}</h2> */}
                <h2>{`Player ${index + 1}`}</h2>
                <span>
                  <EditFillIcon />
                </span>
              </div>
              <div className="profile-ele">
                <div className="profile-image">
                  <div className="img-container">
                    <img src={player.image || DefaultImage} alt="Profile" />
                    <span>
                      <PenIcon />
                    </span>
                  </div>
                  <button className="btn gray">View Session History</button>
                </div>
                <div className="profile-details">
                  <form className="profile-form">
                    <div className="form-group">
                      <label htmlFor={`name-${index}`}>Player Name</label>
                      <input
                        type="text"
                        id={`name-${index}`}
                        value={player.name || ""}
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`grade-${index}`}>Grade</label>
                      <input
                        type="text"
                        id={`grade-${index}`}
                        value={player.grade || ""}
                        readOnly
                      />
                    </div>
                    <div className="form-group w-full">
                      <label htmlFor={`sports-${index}`}>Sports Enrolled</label>
                      <input
                        type="text"
                        id={`sports-${index}`}
                        value={player.sports_enrolled || "-"}
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`package-${index}`}>Package</label>
                      <input
                        type="text"
                        id={`package-${index}`}
                        value={player.package || "-"}
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`sessions-${index}`}>Sessions Used</label>
                      <input
                        type="text"
                        id={`sessions-${index}`}
                        value={player.sessions_used || "-"}
                        readOnly
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default YourPlayers;

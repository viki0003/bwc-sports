import React, { useEffect, useState } from "react";
import EditFillIcon from "../../../Assets/Icons/EditFillIcon";
import PenIcon from "../../../Assets/Icons/PenIcon";
import DefaultImage from "../../../Assets/Images/child.png";
import PageTitle from "../../../Components/Layout/UserDashLyout/PageTitle";
import { usePlayerAccount } from "../../../APIContext/PlayerAccountContext";
import "./yourplayer.css";

const YourPlayers = () => {
  const { players, fetchPlayers, editPlayer } = usePlayerAccount();

  const [editablePlayerId, setEditablePlayerId] = useState(null);
  const [formStates, setFormStates] = useState({});

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  useEffect(() => {
    // Set initial form states from player data
    const initialFormStates = {};
    players.forEach((player) => {
      initialFormStates[player.id] = {
        name: player.name || "",
        grade: player.grade || "",
        sports_enrolled: player.sports_enrolled || "",
        package: player.package || "",
        sessions_used: player.sessions_used || "",
      };
    });
    setFormStates(initialFormStates);
  }, [players]);

  const handleInputChange = (id, field, value) => {
    setFormStates((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleEditClick = (id) => {
    if (editablePlayerId === id) {
      setEditablePlayerId(null); // Cancel editing
    } else {
      setEditablePlayerId(id);
    }
  };

  const handleSubmit = async (id) => {
    const updatedData = formStates[id];
    const result = await editPlayer(id, updatedData);
    if (result.success) {
      setEditablePlayerId(null);
      fetchPlayers();
    }
  };

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
        players.map((player) => {
          const isEditing = editablePlayerId === player.id;
          const formData = formStates[player.id] || {};

          return (
            <div className="profile-container player-container" key={player.id}>
              <div className="player-wrapper">
                <div className="player-header">
                  <h2>{`Player: ${player.name}`}</h2>
                  <span onClick={() => handleEditClick(player.id)} style={{ cursor: "pointer" }}>
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
                    <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group">
                        <label htmlFor={`name-${player.id}`}>Player Name</label>
                        <input
                          type="text"
                          id={`name-${player.id}`}
                          value={formData.name}
                          onChange={(e) => handleInputChange(player.id, "name", e.target.value)}
                          readOnly={!isEditing}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor={`grade-${player.id}`}>Grade</label>
                        <input
                          type="text"
                          id={`grade-${player.id}`}
                          value={formData.grade}
                          onChange={(e) => handleInputChange(player.id, "grade", e.target.value)}
                          readOnly={!isEditing}
                        />
                      </div>

                      <div className="form-group w-full">
                        <label htmlFor={`sports-${player.id}`}>Sports Enrolled</label>
                        <input
                          type="text"
                          id={`sports-${player.id}`}
                          value={formData.sports_enrolled}
                          onChange={(e) => handleInputChange(player.id, "sports_enrolled", e.target.value)}
                          readOnly={!isEditing}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor={`package-${player.id}`}>Package</label>
                        <input
                          type="text"
                          id={`package-${player.id}`}
                          value={formData.package}
                          onChange={(e) => handleInputChange(player.id, "package", e.target.value)}
                          readOnly={!isEditing}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor={`sessions-${player.id}`}>Sessions Used</label>
                        <input
                          type="text"
                          id={`sessions-${player.id}`}
                          value={formData.sessions_used}
                          onChange={(e) => handleInputChange(player.id, "sessions_used", e.target.value)}
                          readOnly={!isEditing}
                        />
                      </div>

                      {isEditing && (
                        <div className="form-group mt-4">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handleSubmit(player.id)}
                          >
                            Save Changes
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default YourPlayers;

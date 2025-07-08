import React, { useEffect, useRef, useState } from "react";
import EditFillIcon from "../../../Assets/Icons/EditFillIcon";
import PenIcon from "../../../Assets/Icons/PenIcon";
import DefaultImage from "../../../Assets/Images/child.png";
import { MEDIA_BASE_URL } from "../../../Config/Config";
import PageTitle from "../../../Components/Layout/UserDashLyout/PageTitle";
import { usePlayerAccount } from "../../../APIContext/PlayerAccountContext";
import "./yourplayer.css";

const YourPlayers = () => {
  const { players, fetchPlayers, editPlayer } = usePlayerAccount();

  const [editablePlayerId, setEditablePlayerId] = useState(null);
  const [formStates, setFormStates] = useState({});
  const fileInputRefs = useRef({});

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  useEffect(() => {
    const initialFormStates = {};
    players.forEach((player) => {
      initialFormStates[player.id] = {
        name: player.name || "",
        grade: player.grade || "",
        sports_enrolled: player.sports_enrolled || "",
        package: player.package || "",
        sessions_used: player.sessions_used || "",
        profile_picture: null,
        image_preview: player.profile_picture
          ? `${MEDIA_BASE_URL}${player.profile_picture}`
          : DefaultImage,
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

  const handleImageChange = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      setFormStates((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          profile_picture: file,
          image_preview: URL.createObjectURL(file),
        },
      }));
    }
  };

  const handlePenClick = (id) => {
    if (editablePlayerId === id && fileInputRefs.current[id]) {
      fileInputRefs.current[id].click();
    }
  };

  const handleEditClick = (id) => {
    setEditablePlayerId((prev) => (prev === id ? null : id));
  };

  const handleSubmit = async (id) => {
    const playerForm = formStates[id];

    const formData = new FormData();
    if (playerForm.name) formData.append("name", playerForm.name);
    if (playerForm.grade) formData.append("grade", playerForm.grade);
    if (playerForm.sports_enrolled) formData.append("sports_enrolled", playerForm.sports_enrolled);
    if (playerForm.package) formData.append("package", playerForm.package);
    if (playerForm.sessions_used) formData.append("sessions_used", playerForm.sessions_used);

    if (playerForm.profile_picture instanceof File) {
      formData.append("profile_picture", playerForm.profile_picture);
    }

    const result = await editPlayer(id, formData);
    if (result.success) {
      setEditablePlayerId(null);
      setFormStates((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          profile_picture: null,
        },
      }));
      if (fileInputRefs.current[id]) {
        fileInputRefs.current[id].value = "";
      }
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
        players.map((player, index) => {
          const isEditing = editablePlayerId === player.id;
          const formData = formStates[player.id] || {};

          return (
            <div className="profile-container player-container" key={player.id}>
              <div className="player-wrapper">
                <div className="player-header">
                  <h2>{`Player ${index + 1}`}</h2> {/* ✅ Changed */}
                  <span onClick={() => handleEditClick(player.id)} style={{ cursor: "pointer" }}>
                    <EditFillIcon />
                  </span>
                </div>

                <div className="profile-ele">
                  <div className="profile-image">
                    <div className="img-container" onClick={() => handlePenClick(player.id)}>
                      <img
                        src={formData.image_preview || DefaultImage}
                        alt="Profile"
                      />
                      {isEditing && (
                        <span className="pen-icon-overlay">
                          <PenIcon />
                        </span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        ref={(el) => (fileInputRefs.current[player.id] = el)}
                        onChange={(e) => handleImageChange(player.id, e)}
                        style={{ display: "none" }}
                      />
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
                          onChange={(e) =>
                            handleInputChange(player.id, "sports_enrolled", e.target.value)
                          }
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

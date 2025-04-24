import React from "react";
import "./style.css";
import image_1 from "../../../Assets/Images/Instruction_GS1.png"; // Adjust path as needed

const SessionCard = () => {
  const sessions = [
    {
      name: "Peer Learning",
      desc: "Collaborate with peers to share knowledge and enhance skills.",
      image: image_1,
    },
    {
      name: "Motivation & Accountability",
      desc: "Stay motivated with group support and accountability.",
      image: image_1,
    },
    {
      name: "Cost Effective",
      desc: "Affordable sessions with shared resources and group rates.",
      image: image_1,
    },
    {
      name: "Social Interaction",
      desc: "Build connections through engaging group activities.",
      image: image_1,
    },
    {
      name: "Diverse Perspective",
      desc: "Gain insights from varied viewpoints in a group setting.",
      image: image_1,
    },
    {
      name: "Team Dynamics",
      desc: "Develop teamwork and leadership skills in a group environment.",
      image: image_1,
    },
  ];

  return (
    <div className="session-card-container">
      <h2 className="session-card-heading">Group Sessions</h2>
      <div className="session-card-grid">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="session-card-item image-card"
            role="article"
            aria-label={session.name}
          >
            <img
              src={session.image}
              alt={session.name}
              className="session-card-image"
            />
            <div className="text-wrapper">
              <p className="session-card-name">{session.name}</p>
              <p className="hover-text">{session.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionCard;

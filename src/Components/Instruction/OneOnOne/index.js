import React from "react";
import "./style.css";

const OneOnOneSessions = () => {
  const cards = [
    {
      title: "Personalized Attention",
      desc: "The coach or instructor can tailor the session to the individual's specific needs, strengths, and weaknesses.",
      img: require("../../../Assets/Images/Instruction_1.png"), // adjust path as per your structure
    },
    // Add more cards if needed
  ];

  return (
    <div className="sessions-container">
      <h2 className="one-on-one-text">One on One Sessions</h2>

      <div className="sessions-grid">
        {cards.map((c, i) => (
          <div
            key={i}
            className="session-card image-card"
            style={{ backgroundImage: `url(${c.img})` }}
          >
            <div className="text-wrapper">
              <p className="card-text">{c.title}</p>
              <p className="hover-text">{c.desc}</p>
            </div>
          </div>
        ))}

        {/* Empty placeholders */}
        <div className="session-card" />
        <div className="session-card" />
        <div className="session-card" />
        <div className="session-card" />
      </div>
    </div>
  );
};

export default OneOnOneSessions;

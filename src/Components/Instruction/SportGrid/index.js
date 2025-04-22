import React from "react";
import "./style.css";

// Import images
import baseballImage from "../../../Assets/Images/baseball_Instruction.png";
import basketballImage from "../../../Assets/Images/basketball_Instruction.png";
import soccerImage from "../../../Assets/Images/soccer_Instruction.png";
import footballImage from "../../../Assets/Images/rugby_Instruction.png";
import trackImage from "../../../Assets/Images/track_Instruction.png";
import golfImage from "../../../Assets/Images/golf_Instruction.png";
import fitnessImage from "../../../Assets/Images/weight_Instruction.png";
import bowlingImage from "../../../Assets/Images/bowling_Instruction.png";

const SportsGrid = () => {
  const sports = [
    { name: "Baseball", image: baseballImage },
    { name: "Basketball", image: basketballImage },
    { name: "Soccer", image: soccerImage },
    { name: "Football", image: footballImage },
    { name: "Track & Field", image: trackImage },
    { name: "Golf", image: golfImage },
    { name: "Fitness", image: fitnessImage },
    { name: "Bowling", image: bowlingImage },
  ];

  return (
    <div className="sports-grid">
      {sports.map((sport, index) => (
        <div key={index} className="sport-item">
          <div className="image-wrapper">
            <img src={sport.image} alt={sport.name} className="sport-image" />
          </div>
          <p className="sport-name">{sport.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SportsGrid;

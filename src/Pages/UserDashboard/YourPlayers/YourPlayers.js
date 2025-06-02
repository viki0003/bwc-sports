import EditFillIcon from "../../../Assets/Icons/EditFillIcon";
import PenIcon from "../../../Assets/Icons/PenIcon";
import Avtar from "../../../Assets/Images/avtar.jpg";
import "./yourplayer.css";
const YourPlayers = () => {
  return (
    <div className="profile-container player-container">
      <div className="player-header">
        <h2>Player 1</h2>
        <span>
          <EditFillIcon />
        </span>
      </div>
      <div className="profile-ele">
        <div className="profile-image">
          <div className="img-container">
            <img src={Avtar} alt="Profile" />
            <span>
              <PenIcon />
            </span>
          </div>
          <button className="btn gray">View Session History</button>
        </div>
        <div className="profile-details">
          <form className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Player Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Grade</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group w-full">
              <label htmlFor="phone">Sports Enrolled</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Package</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Sessions Used</label>
              <input type="tel" id="phone" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default YourPlayers;

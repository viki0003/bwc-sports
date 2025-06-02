import PenIcon from "../../../Assets/Icons/PenIcon";
import Avtar from "../../../Assets/Images/avtar.jpg";
import "./profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-ele">
        <div className="profile-image">
          <div className="img-container">
            <img src={Avtar} alt="Profile" />
            <span>
              <PenIcon />
            </span>
          </div>
        </div>
        <div className="profile-details">
          <form className="profile-form">
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Last Name</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group w-full input-w-text">
              <div className="form-input">
                <label htmlFor="phone">Display Name</label>
                <input type="tel" id="phone" />
              </div>
              <p>
                This will be how your name will be displayed in the account
                section and in reviews
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Email</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" />
            </div>

            <div className="form-group w-full">
              <label htmlFor="phone">Address</label>
              <input type="tel" id="phone" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;

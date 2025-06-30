import React, { useContext, useEffect, useState } from "react";
import { ParentContext } from "../../../APIContext/ParentContext";
import PenIcon from "../../../Assets/Icons/PenIcon";
import Avtar from "../../../Assets/Images/avtar.jpg";
import PageTitle from "../../../Components/Layout/UserDashLyout/PageTitle";
import "./profile.css";

const Profile = () => {
  const { parentProfile, loading } = useContext(ParentContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (parentProfile) {
      setProfile(parentProfile);
    }
  }, [parentProfile]);

  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>No profile found.</div>;

  return (
    <>
      <PageTitle
        showDescription={false}
        showButton={true}
        buttonText="Edit Profile"
        buttonLink="/EditProfile"
        title="Profile"
      />
      <div className="profile-container">
        <div className="profile-ele">
          <div className="profile-image">
            <div className="img-container">
              <img src={Avtar} alt="Profile" />
              <span><PenIcon /></span>
            </div>
          </div>
          <div className="profile-details">
            <form className="profile-form">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={profile.user?.first_name || ""}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={profile.user?.last_name || ""}
                  readOnly
                />
              </div>
              <div className="form-group w-full input-w-text">
                <div className="form-input">
                  <label htmlFor="displayName">Display Name</label>
                  <input
                    type="text"
                    id="displayName"
                    value={profile.user?.username || ""}
                    readOnly
                  />
                </div>
                <p>
                  This will be how your name will be displayed in the account section and in reviews
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={profile.user?.email || ""}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  value={profile.phone || ""}
                  readOnly
                />
              </div>
              <div className="form-group w-full">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={profile.address || ""}
                  readOnly
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

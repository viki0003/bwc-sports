import React, { useContext, useEffect, useState } from "react";
import { ParentContext } from "../../../APIContext/ParentContext";
import PenIcon from "../../../Assets/Icons/PenIcon";
import Avtar from "../../../Assets/Images/avtar.jpg";
import PageTitle from "../../../Components/Layout/UserDashLyout/PageTitle";
import "./profile.css";

const Profile = () => {
  const { parentProfile, loading, updateParentProfile, fetchCurrentParent } = useContext(ParentContext);
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    user: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
    },
    phone: "",
    address: "",
    is_self_pay: true,
  });

  useEffect(() => {
    if (parentProfile) {
      setProfile(parentProfile);
      setFormData({
        user: {
          first_name: parentProfile.user?.first_name || "",
          last_name: parentProfile.user?.last_name || "",
          username: parentProfile.user?.username || "",
          email: parentProfile.user?.email || "",
        },
        phone: parentProfile.phone || "",
        address: parentProfile.address || "",
        is_self_pay: parentProfile.is_self_pay ?? true,
      });
    }
  }, [parentProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["first_name", "last_name"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateParentProfile(formData);
    if (result.success) {
      setEditMode(false);
      await fetchCurrentParent(); // Refresh updated data
    }
  };

  const handleToggleEdit = () => {
    if (editMode) {
      // Cancel editing and reset form
      setFormData({
        user: {
          first_name: profile.user?.first_name || "",
          last_name: profile.user?.last_name || "",
          username: profile.user?.username || "",
          email: profile.user?.email || "",
        },
        phone: profile.phone || "",
        address: profile.address || "",
        is_self_pay: profile.is_self_pay ?? true,
      });
    }
    setEditMode(!editMode);
  };

  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>No profile found.</div>;

  return (
    <>
      <PageTitle
        showDescription={false}
        showButton={true}
        buttonText={editMode ? "Cancel Editing" : "Edit Profile"}
        onButtonClick={handleToggleEdit}
        title="Profile"
      />

      <div className="profile-container">
        <div className="profile-ele">
          <div className="profile-image">
            <div className="img-container">
              <img src={Avtar} alt="Profile" />
              {editMode && <span><PenIcon /></span>}
            </div>
          </div>

          <div className="profile-details">
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  value={formData.user.first_name}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  value={formData.user.last_name}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </div>

              <div className="form-group w-full input-w-text">
                <div className="form-input">
                  <label htmlFor="displayName">Display Name</label>
                  <input
                    type="text"
                    id="displayName"
                    name="username"
                    value={formData.user.username}
                    readOnly
                  />
                </div>
                <p>This will be how your name will be displayed in the account section and in reviews</p>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.user.email}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </div>

              <div className="form-group w-full">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  readOnly={!editMode}
                />
              </div>

              {editMode && (
                <div className="form-group mt-4">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

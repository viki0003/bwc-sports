import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import BackIcon from "../../Assets/Icons/BackIcon";
import NavbarCustom from "../../Components/NavbarCustom";
import { usePlayerAccount } from "../../APIContext/PlayerAccountContext";
import DefaultImage from "../../Assets/Images/child.png";
import PenIcon from "../../Assets/Icons/PenIcon";
import "./style.css";
import { useNavigate } from "react-router-dom";

const jerseySizes = [
  { label: "Small", value: "S" },
  { label: "Medium", value: "M" },
  { label: "Large", value: "L" },
  { label: "Extra Large", value: "XL" },
  { label: "Youth Small", value: "YS" },
  { label: "Youth Medium", value: "YM" },
  { label: "Youth Large", value: "YL" },
];

const AddChildForm = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const { createPlayer } = usePlayerAccount();
  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    date_of_birth: null,
    age: "",
    grade: "",
    jersey_size: "",
    school_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    const dob = e.value;
    const today = new Date();
    const age =
      today.getFullYear() -
      dob.getFullYear() -
      (today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
        ? 1
        : 0);

    setForm((prev) => ({
      ...prev,
      date_of_birth: dob,
      age: age.toString(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let payload;
  
    if (profilePicture) {
      payload = new FormData();
    
      Object.entries(form).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== "") {
          const isDate = value instanceof Date;
          payload.append(key, isDate ? value.toISOString().split("T")[0] : value.toString());
        }
      });
    
      payload.append("profile_picture", profilePicture);
    
      
      for (let pair of payload.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }
    } else {
      payload = {
        ...form,
        date_of_birth: form.date_of_birth
          ? form.date_of_birth.toISOString().split("T")[0]
          : null,
      };
    }
    
  
    const result = await createPlayer(payload);
  
    if (result.success) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Child account created successfully",
        life: 2000,
      });

      setTimeout(() => {
        navigate("/add-a-child");
      }, 2000);

      setForm({
        name: "",
        date_of_birth: null,
        age: "",
        grade: "",
        jersey_size: "",
        school_name: "",
      });
      setProfilePicture(null);
    } else {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: result.error?.detail || "Failed to create account",
        life: 4000,
      });
    }
  };
  

  return (
    <>
      <Toast ref={toast} />
      <NavbarCustom />
      <div className="add-child-container add-child-form-container">
        <div className="add-child-header">
          <span className="add-child-backIcon">
            <BackIcon />
          </span>
          <div className="add-child-header-content">
            <h1 className="add-child-heading">Add Another Child</h1>
            <p>Fill out the information of your Child</p>
          </div>
        </div>

        <div className="add-child-form-container">
          <form onSubmit={handleSubmit}>
            <div className="add-child-form-wrapper">
              <div className="profile-ele">
                <div className="profile-image">
                  <div className="img-container">
                    <img
                      src={profilePicture ? URL.createObjectURL(profilePicture) : DefaultImage}
                      alt="Profile"
                    />
                    <span
                      className="pen-icon-overlay"
                      onClick={() => fileInputRef.current?.click()}
                      style={{ cursor: "pointer" }}
                    >
                      <PenIcon />
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={(e) => {
                        if (e.target.files.length > 0) {
                          setProfilePicture(e.target.files[0]);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="add-child-form-fields">
                <div className="form-group">
                  <InputText
                    placeholder="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <Calendar
                    placeholder="Date of Birth"
                    value={form.date_of_birth}
                    onChange={handleDateChange}
                    showIcon
                    dateFormat="yy-mm-dd"
                    className="calesndr-cstm"
                  />
                </div>

                <div className="form-group">
                  <InputText placeholder="Age" name="age" value={form.age} readOnly />
                </div>

                <div className="form-group">
                  <InputText
                    placeholder="Grade"
                    name="grade"
                    value={form.grade}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group jersey-size-dropdown">
                  <Dropdown
                    value={form.jersey_size}
                    options={jerseySizes}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        jersey_size: e.value,
                      }))
                    }
                    placeholder="Select Jersey Size"
                  />
                </div>

                <div className="form-group">
                  <InputText
                    placeholder="School Name"
                    name="school_name"
                    value={form.school_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="add-child-submit-button">
              <button type="submit" className="p-submit-button add-child-btn">
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddChildForm;

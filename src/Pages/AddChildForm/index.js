import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import BackIcon from "../../Assets/Icons/BackIcon";
import NavbarCustom from "../../Components/NavbarCustom";
import { usePlayerAccount } from "../../APIContext/PlayerAccountContext";
import "./style.css";

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
  const toast = React.useRef(null);
  const { createPlayer } = usePlayerAccount();

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
    const age = today.getFullYear() - dob.getFullYear();
    setForm((prev) => ({
      ...prev,
      date_of_birth: dob,
      age: age.toString(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      date_of_birth: form.date_of_birth?.toISOString().split("T")[0],
    };

    const result = await createPlayer(payload);

    if (result.success) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Child account created successfully",
        life: 3000,
      });
      setForm({
        name: "",
        date_of_birth: null,
        age: "",
        grade: "",
        jersey_size: "",
        school_name: "",
      });
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
                name="date_of_birth"
                value={form.date_of_birth}
                onChange={handleDateChange}
                showIcon
                dateFormat="yy-mm-dd"
                className="calesndr-cstm"
              />
            </div>

            <div className="form-group">
              <InputText
                placeholder="Age"
                name="age"
                value={form.age}
                readOnly
              />
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
                className="jersey-size-dropdownn"
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

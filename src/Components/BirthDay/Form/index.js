import React, { useState } from "react";
import "./form.css";
import BirthImage1 from "../../../Assets/Images/Birth_Image1.jpeg";

const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Typically, send the data to your backend here.
  };

  return (
    <div className="quote-form-container">
      <div className="quote-form-gallery">
        <div className="gallery-item layout-1"></div>
        <div className="gallery-item layout-2">
          <img src={BirthImage1} alt="Birth" />
        </div>
        <div className="gallery-item layout-3"></div>
        <div className="gallery-item layout-4"></div>
      </div>

      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="form-field full-width">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-field half-width">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field half-width">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-field full-width">
          <textarea
            name="comments"
            placeholder="Comments & Requests"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Request a Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteRequestForm;

import React from "react";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Password } from "primereact/password";
import { Link } from "react-router-dom";
import LoginImg from "../../../Assets/Images/login-img.png";
import "./createaccount.css";
import NavbarCustom from "../../../Components/Navbar-custom";

const CreateAccount = () => {
  return (
    <>
    <NavbarCustom/>
      <div className="create-account-ui">
        <div className="ca-container">
          <div className="ca-form">
            <h1>Create Your Account</h1>
            <form>
              <div className="ca-form-group">
                <div className="ca-form-group-item">
                  <InputText placeholder="First Name" />
                </div>
                <div className="ca-form-group-item">
                  <InputText placeholder="Last Name" />
                </div>
              </div>
              <div className="ca-form-group">
                <InputText placeholder="Your Email ID" />
              </div>
              <div className="ca-radio-group">
                <div className="radio-group-item">
                  <RadioButton />
                  <label>Self Direction</label>
                </div>
                <div className="radio-group-item">
                  <RadioButton />
                  <label>Self Pay</label>
                </div>
              </div>
              <div className="ca-form-group">
                <p className="red-info">
                  If you have self direction, we need your card on file only for
                  no-shows or cancellations.
                </p>
              </div>
              <div className="ca-form-group">
                <Password toggleMask placeholder="Password" />
              </div>
              <div className="ca-form-group">
                <Password toggleMask placeholder="Confirm Password" />
              </div>
              <div className="ca-form-group">
                <button type="submit">Create Your Account</button>
              </div>
              <hr />
              <div className="ca-form-group login-link">
                <p>Already have an account? Login</p>
                <Link to="/">Log in to Your Account</Link>
              </div>
            </form>
          </div>
          <div className="ca-image">
            <img src={LoginImg} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;

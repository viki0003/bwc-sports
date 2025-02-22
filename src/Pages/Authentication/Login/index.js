import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import CoverPhoto from "../../../Assets/Images/login-img.png";
import NavbarCustom from "../../../Components/NavbarCustom";
const Login = () => {
  return (
    <>
      <NavbarCustom />
      <div className="login-container">
        <div className="cover-photo-banner">
          <img src={CoverPhoto} alt="Cover" className="cover-photo" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email ID"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
          <hr />
          <div className="new-account">
            <p>New here? Create an Account!</p>
            <Link className="create-account-button" to="/create-an-account">
              Create Your Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

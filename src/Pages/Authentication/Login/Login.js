import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Link } from "react-router-dom";
import LoginImg from "../../../Assets/Images/login-img.png";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="create-account-ui">
        <div className="ca-container ca-container-login">
          <div className="ca-form">
            <h1>Login</h1>
            <form>
              <div className="ca-form-group">
                <InputText placeholder="Email ID" />
              </div>
              <div className="ca-form-group forgot-pass-group">
                <Password toggleMask placeholder="Password" />
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className="ca-form-group">
                <button type="submit">Sign In</button>
              </div>
              <hr />
              <div className="ca-form-group login-link">
                <p>New here? Create an Account Now!</p>
                <Link to="#">Create Your Account Now</Link>
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

export default Login;

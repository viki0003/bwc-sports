import React from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Link } from "react-router-dom";
import LoginImg from "../../../Assets/Images/login-img.png";
import "./login.css";
import Navbar from "../../../Components/Navbar";
import CoverPhoto from "../../../Images/cover_photo.png";
const Login = () => {
    return(
        <>
        <Navbar/>
        <div className="container">
            <div className="cover-photo-banner">
                <img src={CoverPhoto} alt="Cover" className="cover-photo" />
            </div>
            <div className="login-form">
            <h2>Login</h2>
                <form>
                    <div className="form-group">
                        
                        <input type="email" id="email" name="email" placeholder="Email ID" required />
                    </div>
                    <div className="form-group">
                        
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
                <hr />
                <div className="new-account">
                    <p>New here? Create an Account Now!</p>
                    <button className="create-account-button">Create Your Account Now</button>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Login;

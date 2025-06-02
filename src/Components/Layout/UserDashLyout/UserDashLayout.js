import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavbarCustom from "../../NavbarCustom";
import DashSidebar from "../DashSidebar/DashSidebar";
import LeftIcon from "../../../Assets/Icons/LeftIcon";
import './userdashlayout.css'
const Layout = () => {
  return (
    <div className="ui-layout">
      <NavbarCustom />
      <div className="render-output">
        <div className="app-container">
          <div className="app-sidebar">
            <DashSidebar />
          </div>
          <div className="app-content">
            <div className="app-content-breadcrumb p-4">
              <div className="ud-title">
                <div className="ud-back-btn">
                  <button className="btn btn-primary">
                    <LeftIcon />
                  </button>
                </div>
                <div className="ud-heading-cnt">
                  <h1 className="ud-heading">Profile</h1>
                  <p>
                    View and manage the children linked to your account. Add new
                    players and track their activities.
                  </p>
                </div>
              </div>
              <div className="ud-heading-btn">
                <Link to="#" className="btn orange">
                  Edit Profile
                </Link>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

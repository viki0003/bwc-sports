import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./dashsidebar.css";

const DashSidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="sidebar">
      <div className={`sidebar-item ${isActive("/profile") ? "active" : ""}`}>
        <Link to="/profile">Profile</Link>
      </div>

      <div
        className={`sidebar-item ${isActive("/your-players") ? "active" : ""}`}
      >
        <Link to="/your-players">Your Players</Link>
      </div>

      <div
        className={`sidebar-item ${
          isActive("/payments-billings") ? "active" : ""
        }`}
      >
        <Link to="/payments-billings">Payments & Billings</Link>
      </div>

      <div
        className={`sidebar-item ${isActive("/subscriptions") ? "active" : ""}`}
      >
        <Link to="/subscriptions">Subscriptions</Link>
      </div>

      <div
        className={`sidebar-item ${isActive("/notifications") ? "active" : ""}`}
      >
        <Link to="/notifications">Notifications</Link>
      </div>
      <div
        className={`sidebar-item ${
          isActive("/change-password") ? "active" : ""
        }`}
      >
        <Link to="/change-password">Change Password</Link>
      </div>
      <div className={`sidebar-item ${isActive("/logout") ? "active" : ""}`}>
        <Link to="/logout">Log Out</Link>
      </div>
    </div>
  );
};

export default DashSidebar;

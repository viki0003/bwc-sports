import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <p>Footer</p>
    </div>
  );
};

export default Layout;

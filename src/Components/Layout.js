import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";

import NavbarCustom from "./NavbarCustom";
const Layout = () => {
  return (
    <div>
      <NavbarCustom/>
      <Outlet />
      <p>Footer</p>
    </div>
  );
};

export default Layout;

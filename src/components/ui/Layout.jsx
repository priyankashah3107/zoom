import React from "react";
import LeftBar from "./LeftBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <LeftBar />
      <Outlet />
    </div>
  );
};

export default Layout;

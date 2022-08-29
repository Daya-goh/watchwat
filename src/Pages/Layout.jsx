import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import WatchList from "./WatchListDrawer";

const Layout = ({ addShow }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex flex-col items-center gap-4">
          <NavBar />
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <WatchList addShow={addShow} />
        </ul>
      </div>
    </div>
  );
};

export default Layout;

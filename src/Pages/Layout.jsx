import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SiteTitle from "../Components/SiteTitle";

const Layout = () => {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <SiteTitle />
      <Outlet />
    </div>
  );
};

export default Layout;

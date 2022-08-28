import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;

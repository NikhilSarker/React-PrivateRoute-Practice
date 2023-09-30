import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";


const Layout = () => {
  return (
    <div className="max-w-[1320px] m-auto">
      <Navbar></Navbar>

      <Outlet></Outlet>
      
    </div>
  );
};

export default Layout;
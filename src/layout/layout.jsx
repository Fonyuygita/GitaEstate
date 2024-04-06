import "./layout.scss";
import Navbar from "../components/navbar/Navbar"
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">

    <Navbar />
     
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
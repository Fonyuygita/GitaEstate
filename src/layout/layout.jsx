import React, { useContext } from "react";
import "./layout.scss";
import Navbar from "../components/navbar/Navbar"
import { Outlet } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";

function Layout() {
  
  const {darkMode}=useContext(DarkModeContext);
  return (
    
    <div className={`theme-${darkMode ? "dark" : "light"} layout`} >
<div className="navbar">
<Navbar />

</div>
     
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
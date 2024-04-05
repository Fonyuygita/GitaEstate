import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {

  const [open, setOpen]=useState(false)
  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>GitEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Content</a>
        <a href="/">Agents</a>
        <a href="/">Home</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="" className="register">
          Sign Out
        </a>
        <div className="menuIcon">
        <img src="/menu.png" alt=""  onClick={()=>setOpen(prev=>!prev)}/>
        </div>
        <div className={open ? "menu active" : "menu"}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Content</a>
        <a href="/">Agents</a>
        <a href="/">Home</a>
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./index.css";
import logo from "./images/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo" width="70" height="50" />
        <h1>Keep Notes</h1>
      </div>
    </>
  );
};

export default Header;

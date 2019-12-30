import React from "react";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="wrapper">
        <img className="logo" src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;

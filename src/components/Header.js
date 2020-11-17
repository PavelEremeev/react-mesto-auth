import React from "react";
import logo from "../images/logo.svg";
import "../index.css";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo.pic" />
    </header>
  );
}

export default Header;

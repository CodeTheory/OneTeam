import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const baseClass = "nav-bar";
  return (
    <div className={baseClass}>
      <Link className={`${baseClass}__link`} to="/">
        Home
      </Link>
      <Link className={`${baseClass}__link`} to="/Users">
       Users
      </Link>
    </div>
  );
};

export default NavBar;

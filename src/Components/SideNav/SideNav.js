import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import "./SideNav.css";

const SideNav = () => {
  return (
    <nav className="side-nav-container">
      <h3 className="side-nav-header">Your To-Do Lists</h3>
      <NavLink className="side-nav-item" to="/">
        Home
      </NavLink>
      <NavLink className="side-nav-item" to="/free">
        No Auth Needed
      </NavLink>
      <NavLink className="side-nav-item" to="/auth">
        Auth Needed
      </NavLink>

      <Logout />
    </nav>
  );
};

export default SideNav;

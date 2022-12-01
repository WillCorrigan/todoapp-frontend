import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import "./SideNav.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get("AUTHENTICATION_TOKEN");
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

      {token && <Logout />}
    </nav>
  );
};

export default SideNav;

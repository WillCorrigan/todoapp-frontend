import React from "react";
import { NavLink } from "react-router-dom";
import NavLogout from "./NavLogout";
import "./SideNav.css";
import Cookies from "universal-cookie";
import NavLogin from "./NavLogin";
const cookies = new Cookies();

const token = cookies.get("AUTHENTICATION_TOKEN");

const SideNav = () => {
  return (
    <nav className="side-nav-container">
      <h3 className="side-nav-header">To-Do App</h3>
      <NavLink className="side-nav-item" to="/">
        Home
      </NavLink>
      <NavLink className="side-nav-item" to="/free">
        No Auth Needed
      </NavLink>
      <NavLink className="side-nav-item" to="/auth">
        Auth Needed
      </NavLink>
      <NavLink className="side-nav-item" to="/todolist">
        Todos
      </NavLink>

      {token ? <NavLogout /> : <NavLogin />}
    </nav>
  );
};

export default SideNav;

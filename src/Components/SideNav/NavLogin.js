import React from "react";
import "./NavLogin.css";

const loginUser = () => {
  window.location.href = "/login";
};

const NavLogin = () => {
  return (
    <div className="navlogin-button-container">
      <button
        className="navlogin-button"
        type="submit"
        onClick={() => loginUser()}
      >
        Login
      </button>
    </div>
  );
};

export default NavLogin;

import React from "react";
import "./NavLogout.css";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get("AUTHENTICATION_TOKEN");

const NavLogout = () => {
  const logoutUser = () => {
    cookies.remove("AUTHENTICATION_TOKEN", { path: "/" });

    window.location.href = "/login";
  };

  return (
    <div className="navlogout-button-container">
      <img
        src="/images/icons8-male-user-48.png"
        alt="profile"
        className="navlogout-profile-img"
      />
      <div className="navlogout-side-div">
        {token && <span>{jwt_decode(token).userEmail}</span>}
        <button
          className="navlogout-button"
          type="submit"
          onClick={() => logoutUser()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavLogout;

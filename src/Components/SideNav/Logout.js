import React from "react";
import "./Logout.css";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get("AUTHENTICATION_TOKEN");

const Logout = () => {
  const logoutUser = () => {
    cookies.remove("AUTHENTICATION_TOKEN", { path: "/" });

    window.location.href = "/login";
  };

  return (
    <div className="logout-button-container">
      <img
        src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/32/profile-icon.png"
        alt="profile"
        className="logout-profile-img"
      />
      <div className="logout-side-div">
        {token && <span>{jwt_decode(token).userEmail}</span>}
        <button
          className="logout-button"
          type="submit"
          onClick={() => logoutUser()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;

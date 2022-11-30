import React from "react";
import "./Logout.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const logout = () => {
  cookies.remove("AUTHENTICATION_TOKEN", { path: "/" });

  window.location.href = "/";
};

const Logout = () => {
  return (
    <div className="logout-button-container">
      <img
        src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/32/profile-icon.png"
        alt="profile"
        className="logout-profile-img"
      />
      <div className="logout-side-div">
        <span>username</span>
        <button
          className="logout-button"
          type="submit"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;

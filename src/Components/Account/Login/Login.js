import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Login.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const cookies = new Cookies();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://todoapptesting.fly.dev/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        cookies.set("AUTHENTICATION_TOKEN", result.data.token, {
          path: "/",
        });

        // redirect user to the auth page
        window.location.href = "/auth";
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };
  return (
    <div className="login-container">
      <form className="login-form" action="#">
        <h1 className="login-title">Sign In</h1>
        <NavLink className="login-register-link" to="/register">
          or create a new account
        </NavLink>
        <div className="login-input-container">
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
          ></input>
        </div>
        <div>
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="login-submit-button"
          onClick={handleSubmit}
          onSubmit={handleSubmit}
        >
          Sign In
        </button>
        <span className="login-error-message">{errorMessage}</span>
      </form>
    </div>
  );
}

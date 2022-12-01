import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://todoapptesting.fly.dev/register",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        setRegistered(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <div className="register-container">
      <form className="register-form" action="#">
        <h1 className="register-title">Register</h1>
        <NavLink className="register-login-link" to="/login">
          or sign in
        </NavLink>
        <div className="register-input-container">
          <input
            className="register-input"
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
          ></input>
        </div>
        <div>
          <input
            className="register-input"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="register-submit-button"
          onClick={handleSubmit}
          onSubmit={handleSubmit}
        >
          Sign In
        </button>
        {registered && (
          <span className="register-successful-message">
            Successfully registered
          </span>
        )}
      </form>
    </div>
  );
}

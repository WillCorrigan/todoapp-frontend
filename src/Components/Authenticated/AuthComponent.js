import axios from "axios";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Cookies from "universal-cookie";
import "./AuthComponent.css";
const cookies = new Cookies();

const token = cookies.get("AUTHENTICATION_TOKEN");

export default function AuthComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://todoapptesting.fly.dev/auth-needed",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  const messageLoaded = message ? (
    <h3 className="text-center text-danger">{message}</h3>
  ) : (
    <BeatLoader
      color="#491FF0"
      loading="true"
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );

  return (
    <div>
      <h1 className="text-center">Auth Component</h1>
      <div className="justify-content-center">{messageLoaded}</div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FreeComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://todoapptesting.fly.dev/no-auth-needed",
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(
          result.data.message + ": Accessed through the API and useEffect"
        );
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Free Component</h1>

      <h3 className="text-center text-danger">{message}</h3>
    </div>
  );
}

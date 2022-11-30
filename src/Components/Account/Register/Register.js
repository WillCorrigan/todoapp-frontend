import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://todoapptesting.fly.dev/register",
      data: values,
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
    <div class="form-container">
      <h2>Register</h2>
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );

  // return (
  //   <>
  //     <h2>Register</h2>
  //     <Form onSubmit={(e) => handleSubmit(e)}>
  //       {/* email */}
  //       <Form.Group controlId="formBasicEmail">
  //         <Form.Label>Email address</Form.Label>
  //         <Form.Control
  //           type="email"
  //           name="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           placeholder="Enter email"
  //         />
  //       </Form.Group>

  //       {/* password */}
  //       <Form.Group controlId="formBasicPassword">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           name="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           placeholder="Password"
  //         />
  //       </Form.Group>

  //       {/* submit button */}
  //       <Button
  //         variant="primary"
  //         type="submit"
  //         onClick={(e) => handleSubmit(e)}
  //       >
  //         Submit
  //       </Button>
  //       {register ? (
  //         <p className="text-success">You Are Registered Successfully</p>
  //       ) : (
  //         <p className="text-danger">You Are Not Registered</p>
  //       )}
  //     </Form>
  //   </>
  // );
}

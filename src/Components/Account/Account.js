import React from "react";
import { Col, Row } from "react-bootstrap";
import Login from "./Login/Login";
import Register from "./Register/Register";

export default function Account() {
  return (
    <Row>
      <Col>
        <Register />
      </Col>
      <Col>
        <Login />
      </Col>
    </Row>
  );
}

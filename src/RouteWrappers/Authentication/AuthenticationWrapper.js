import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AuthenticationWrapper({ children }) {
  const token = cookies.get("AUTHENTICATION_TOKEN");

  return token ? children : <Navigate to={`/login`} replace />;
}

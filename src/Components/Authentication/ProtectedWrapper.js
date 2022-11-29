import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function ProtectedWrapper({ isLoggedIn, ...props }) {
  return isLoggedIn ? <Outlet {...props} /> : <Navigate to={`/`} replace />;
}

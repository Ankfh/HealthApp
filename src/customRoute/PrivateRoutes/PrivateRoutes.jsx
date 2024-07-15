// src/components/PrivateRoute.js
import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const userid = localStorage.getItem("user_id");

  return userid ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

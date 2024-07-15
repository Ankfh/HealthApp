// src/components/PublicRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ element }) => {
  const userid = localStorage.getItem("user_id");

  return !userid ? <Outlet /> : <Navigate to={"/"} />;
};

export default PublicRoute;

import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const AuthorRoutes = () => {
  const { userData } = useContext(AuthContext);

  if (userData?.Profile?.trim() !== "Author") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthorRoutes;

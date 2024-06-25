import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     checkAuthentication();
  //   }, 5 * 60 * 1000); // Check every 5 minutes

  //   return () => clearInterval(interval);
  // }, [checkAuthentication]);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

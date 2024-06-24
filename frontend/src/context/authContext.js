import React, { createContext, useState, useEffect, useContext } from "react";
import axiosInstance from "services/api";
import authService from "services/authService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const checkAuthentication = async () => {
    axiosInstance
      .get("/auth/check")
      .catch((error) => {
        setIsAuthenticated(false);
        setUser(null);
      })
      .then(() => {
        setUser(response.data);
        setIsAuthenticated(true);
      });
  };

  const logout = async () => {
    authService
      .logout()
      .catch(() => undefined)
      .finally(() => {
        setIsAuthenticated(false);
        setUser(null);
      });
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, checkAuthentication, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };

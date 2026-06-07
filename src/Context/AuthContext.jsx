import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const BaseUrl = import.meta.env.VITE_API_URL;

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [signingUp, setSigningUp] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const signup = async (data) => {
    setSigningUp(true);
    try {
      const response = await fetch(`${BaseUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (response.ok) {
        console.log("Signup successful:", res);
        navigate("/login");
      } else {
        console.error("Signup failed:", res);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
    } finally {
      setSigningUp(false);
    }
  };

  const login = async (data) => {
    setSigningIn(true);
    try {
      const response = await fetch(`${BaseUrl}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Login successful:", result);
        navigate("/");
      } else {
        console.error("Signup failed:", res);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    } finally {
      setSigningIn(false);
    }
  };

  const value = {
    signup,
    login,
    handleConfirmPassword,
    handlePassword,
    signingUp,
    signingIn,
    showPassword,
    showConfirmPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

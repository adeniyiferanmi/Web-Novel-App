import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Cookies from "js-cookie";

export const AuthContext = createContext();
const BaseUrl = import.meta.env.VITE_API_URL;

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [signingUp, setSigningUp] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userData, setUserData] = useState(null);
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
        toast.success("Signup successful! Please log in.");
        navigate("/dashboard");
      } else {
        toast.error("Signup failed. Please try again.");
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
        toast.success("Login successful!");
        Cookies.set("token", result.token, { expires: 30 });
        navigate("/dashboard");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
      console.log(error);
    } finally {
      setSigningIn(false);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUserData(null);
  };

  const isAuthenticated = async () => {
    const token = Cookies.get("token");
    if (!token) {
      return false;
    }

    try {
      const res = await fetch(`${BaseUrl}/auth/verifytoken`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      setUserData(result.data);
      console.log(userData);

      if (res.ok) {
        return true;
      }
    } catch (error) {
      console.log("Error verifying token:", error);
      return false;
    }
  };

  const value = {
    signup,
    login,
    handleConfirmPassword,
    handlePassword,
    isAuthenticated,
    logout,
    signingUp,
    signingIn,
    showPassword,
    showConfirmPassword,
    userData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

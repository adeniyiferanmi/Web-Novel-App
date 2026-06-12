import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useGoogleLogin } from "@react-oauth/google";
import { ContentContext } from "./ContentContext";

export const AuthContext = createContext();
const BaseUrl = import.meta.env.VITE_API_URL;

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [signingUp, setSigningUp] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("novels");
  const [pick, setPick] = useState(null);
  const [loading, setLoading] = useState(false);

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
      console.log(res);
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
      console.log(result);

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
      // console.log(userData);

      if (res.ok) {
        return true;
      }
    } catch (error) {
      console.log("Error verifying token:", error);
      return "network_error";
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await fetch(`${BaseUrl}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: tokenResponse.access_token }),
      });

      const response = await res.json();
      console.log("google response:", response);
      if (res.ok) {
        Cookies.set("token", response.token, { expires: 30 });
        setUserData(response.data);
        if (response.needsProfile) {
          navigate("/select-profile");
        } else {
          response.data.Profile?.trim() === "Author"
            ? navigate("/dashboard")
            : navigate("/");
        }
      }
    },
    onError: () => toast.error("Google login failed"),
  });
  const handleUpdateProfile = async () => {
    if (!pick) return toast.error("Please select a profile");
    setLoading(true);
    try {
      const token = Cookies.get("token");
      console.log("token:", token); // check if it exists

      const res = await fetch(`${BaseUrl}/auth/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ Profile: pick.title }),
      });
      const response = await res.json();
      if (res.ok) {
        setUserData(response.data);
        navigate(pick.title === "Author" ? "/dashboard" : "/");
      } else {
        toast.error(response.message || "Unable to update profile");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    signup,
    login,
    handleConfirmPassword,
    handlePassword,
    isAuthenticated,
    logout,
    setActiveTab,
    googleLogin,
    handleUpdateProfile,
    setPick,
    signingUp,
    signingIn,
    showPassword,
    showConfirmPassword,
    userData,
    activeTab,
    pick,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

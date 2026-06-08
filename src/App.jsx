import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ContentProvider from "./Context/ContentContext";
import AuthProvider from "./Context/AuthContext";
import { Toaster } from "sonner";
import DashboardPage from "./components/DashboardPage";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import AuthorDashboardPage from "./components/AuthorDashboardPage";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        expand={false}
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "#EEE9E1",
            border: "1px solid #E8B84B",
            color: "#2E2939",
            fontFamily: "serif",
            borderRadius: "12px",
            padding: "16px",
          },
          classNames: {
            title: "font-bold text-[1rem]",
            description: "text-[0.85rem] text-[#00000080]",
          },
        }}
      />
      <AuthProvider>
        <ContentProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route
                path="/author-dashboard"
                element={<AuthorDashboardPage />}
              />
            </Route>
          </Routes>
        </ContentProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

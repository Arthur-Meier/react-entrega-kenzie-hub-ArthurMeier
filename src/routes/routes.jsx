import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/NotFound";
import RegisterPage from "../pages/register";
import ProtectedRoutes from "../ProtectedRoutes";
import { TechProvider } from "../providers/TechContext";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/LandingPage" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <TechProvider>
              <LandingPage />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

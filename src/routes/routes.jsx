import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/NotFound";
import RegisterPage from "../pages/register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;

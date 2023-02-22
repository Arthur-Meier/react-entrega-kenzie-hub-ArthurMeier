import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

const ProtectedRoutes = () => {
  const { User } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!User) {
      navigate("/");
    }
  }, []);

  return <>{User ? <Outlet /> : null}</>;
};

export default ProtectedRoutes;

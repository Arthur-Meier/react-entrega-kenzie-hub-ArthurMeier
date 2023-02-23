import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../sevices/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  const navigate = useNavigate();

  const loginUser = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/landingPage");
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  useEffect(() => {
    const renderUser = async () => {
      const user = localStorage.getItem("@TOKEN");
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      };
      try {
        const response = await api.get("/profile", config);
        setUser(response.data);
        navigate("/landingPage");
      } catch (error) {
        console.log(error);
      }
    };
    renderUser();
  }, []);

  return (
    <UserContext.Provider value={{ User, loginUser, registerUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

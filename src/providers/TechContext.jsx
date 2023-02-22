import { createContext, useEffect, useState } from "react";
import { api } from "../sevices/api";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [Techs, setTechs] = useState([]);

  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    const renderTechs = async () => {
      const userId = localStorage.getItem("@USERID");
      try {
        const response = await api.get(`/users/${userId}`);
        setTechs(response.data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    renderTechs();
  }, []);

  const createTech = async (formData) => {
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs([...Techs, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTech = async (id) => {
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newList = Techs.filter((tech) => tech.id !== id);
      setTechs(newList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={{ createTech, removeTech, Techs }}>
      {children}
    </TechContext.Provider>
  );
};

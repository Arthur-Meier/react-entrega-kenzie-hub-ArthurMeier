import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { api } from "../../sevices/api";
import { useState, useEffect } from "react";
import { StyledSection } from "./style";

const LandingPage = () => {
  const navigate = useNavigate();

  const [User, setUser] = useState({});

  const handleForm = (event) => {
    event.preventDefault();

    navigate("/");
  };

  useEffect(() => {
    const renderUser = async () => {
      const user = localStorage.getItem("@TOKEN");
      const config = {
        headers: {
          Authorization: "Bearer " + user,
        },
      };
      try {
        const response = await api.get("/profile", config);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    renderUser();
  }, []);

  return (
    <StyledSection>
      <div>
        <Navbar name="Sair" />
        <header>
          <h1>Olá, {User.name}</h1>
          <span>{User.course_module}</span>
        </header>
        <main>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </main>
      </div>
    </StyledSection>
  );
};

export default LandingPage;

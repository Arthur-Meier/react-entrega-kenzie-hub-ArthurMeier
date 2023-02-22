import { Navbar } from "../../components/Navbar";
import { TechsList } from "../../components/TechsList";
import { useContext } from "react";
import { StyledSection } from "./style";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";

const LandingPage = () => {
  const { User, userRender } = useContext(UserContext);

  const { Techs } = useContext(TechContext);

  userRender();

  return (
    <StyledSection>
      <div>
        <Navbar name="Sair" />
        <header>
          <h1>Olá, {User.name}</h1>
          <span>{User.course_module}</span>
        </header>
        <main>
          <div>
            <h2>Tecnologias</h2>
            <button onSubmit={() => addTech()}>+</button>
          </div>
          <TechsList Techs={Techs} />
        </main>
      </div>
    </StyledSection>
  );
};

export default LandingPage;

import { Navbar } from "../../components/Navbar";
import { TechsList } from "../../components/TechsList";
import { useContext, useState } from "react";
import { StyledSection } from "./style";
import { UserContext } from "../../providers/UserContext";
import CreateTechModal from "../../components/modal/CreateTechModal";

const LandingPage = () => {
  const { User } = useContext(UserContext);

  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

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
            <button onClick={() => showModal()}>+</button>
          </div>
          <TechsList />
        </main>
      </div>
      <CreateTechModal isOpen={openModal} onClose={closeModal} />
    </StyledSection>
  );
};

export default LandingPage;

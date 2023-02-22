import React, { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

const PatchTechModal = () => {
  const { removeTech } = useContext(TechContext);
  return (
    <div>
      <div>
        <h2>Tecnologia Detalhes</h2>
        <form>
          <Input Label="Nome" type="text" placeholder="Nome da Tecnologia" />
          <select name="" id="">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button>Salvar alterações</button>
          <button onClick={removeTech()}>Excluir</button>
        </form>
      </div>
    </div>
  );
};

export default PatchTechModal;

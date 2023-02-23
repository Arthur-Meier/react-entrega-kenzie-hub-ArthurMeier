import React from "react";
import { StyledFormModal } from "./style";

const FormModal = ({ children, register, submit, handleSubmit }) => {
  return (
    <StyledFormModal onSubmit={handleSubmit(submit)}>
      <label htmlFor="">Nome do projeto</label>
      <input
        label="Nome"
        type="text"
        placeholder="Nome da Tecnologia"
        readOnly
      />
      <label htmlFor="">Status</label>
      <select name="status" id="" {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      {children}
    </StyledFormModal>
  );
};

export default FormModal;

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import Input from "../Input";
import { StyledModal } from "./BackroundModal/style";
import HeaderModal from "./headerModal";
import { CreateBtn, StyledCreateModal, StyledDialog } from "./style";

const CreateTechModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();
  const { createTech } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <StyledModal onClick={() => onClose()} />
      <StyledDialog id="createTech" open>
        <div>
          <HeaderModal onClose={onClose} />
          <StyledCreateModal onSubmit={handleSubmit(submit)}>
            <Input
              Label="Nome"
              type="text"
              placeholder="Nome da Tecnologia"
              register={register("title")}
            />
            <label htmlFor="">Selecionar status</label>
            <select name="status" id="" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <CreateBtn type="submit">Cadastrar Tecnologia</CreateBtn>
          </StyledCreateModal>
        </div>
      </StyledDialog>
    </>
  );
};

export default CreateTechModal;

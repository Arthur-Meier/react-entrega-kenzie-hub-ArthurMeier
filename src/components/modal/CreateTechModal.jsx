import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";

const CreateTechModal = () => {
  const { register, handleSubmit } = useForm();
  const { createTech } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData);
  };

  return (
    <div>
      <div>
        <h2>Cadastrar Tecnologia</h2>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            Label="Nome"
            type="text"
            placeholder="Nome da Tecnologia"
            register={register("name")}
          />
          <label htmlFor="">Selecionar status</label>
          <select name="status" id="" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTechModal;

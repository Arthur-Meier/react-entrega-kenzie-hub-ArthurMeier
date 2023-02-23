import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { StyledModal } from "./BackroundModal/style";
import FormModal from "./FormModal/FormModal";
import HeaderModal from "./headerModal";
import { DeleteBtn, PatchBtn, StyledDialog } from "./style";

const PatchTechModal = ({ isOpen, onClose, techId }) => {
  const { removeTech, patchTech, patchTechId } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    patchTech(formData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <StyledModal onClick={() => onClose()} />
      <StyledDialog id="patchTech" open>
        <div>
          <HeaderModal onClose={onClose} />
          <FormModal
            submit={submit}
            handleSubmit={handleSubmit}
            register={register}
          >
            <PatchBtn type="submit">Salvar alterações</PatchBtn>
            <DeleteBtn
              type="button"
              onClick={() => {
                removeTech(techId);
                onClose();
              }}
            >
              Excluir
            </DeleteBtn>
          </FormModal>
        </div>
      </StyledDialog>
    </>
  );
};

export default PatchTechModal;

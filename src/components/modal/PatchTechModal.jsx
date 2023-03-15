import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { StyledModal } from "./BackroundModal/style";
import HeaderModal from "./headerModal";
import { DeleteBtn, PatchBtn, StyledDialog } from "./style";
import PatchFormModal from "./PatchFormModal/PatchFormModal";

const PatchTechModal = ({ isOpen, onClose, techId, name }) => {
  const { removeTech, patchTech, patchName } = useContext(TechContext);
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
          <PatchFormModal
            name={name}
            submit={submit}
            handleSubmit={handleSubmit}
            register={register}
            patchName={patchName}
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
          </PatchFormModal>
        </div>
      </StyledDialog>
    </>
  );
};

export default PatchTechModal;

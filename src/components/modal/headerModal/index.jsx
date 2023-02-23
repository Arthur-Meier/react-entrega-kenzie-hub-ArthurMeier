import React from "react";
import { StyledHeaderModal } from "./style";

const HeaderModal = ({ onClose }) => {
  return (
    <StyledHeaderModal>
      <h3>Tecnologia Detalhes</h3>
      <div onClick={() => onClose()}>X</div>
    </StyledHeaderModal>
  );
};

export default HeaderModal;

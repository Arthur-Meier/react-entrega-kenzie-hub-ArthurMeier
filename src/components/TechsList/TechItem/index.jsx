import React from "react";
import { StyledItem } from "./style";

const TechItem = ({ name, nivel, onPatchItem }) => {
  return (
    <StyledItem onClick={() => onPatchItem()}>
      <h1>{name}</h1>
      <span>{nivel}</span>
    </StyledItem>
  );
};

export default TechItem;

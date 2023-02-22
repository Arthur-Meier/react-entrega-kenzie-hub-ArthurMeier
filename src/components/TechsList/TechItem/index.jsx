import React from "react";
import { StyledItem } from "./style";

const TechItem = ({ name, nivel }) => {
  return (
    <StyledItem>
      <h1>{name}</h1>
      <span>{nivel}</span>
    </StyledItem>
  );
};

export default TechItem;

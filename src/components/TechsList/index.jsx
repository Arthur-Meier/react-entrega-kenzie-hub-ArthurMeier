import React from "react";
import { StyledList } from "./style";
import TechItem from "./TechItem";

export const TechsList = ({ Techs }) => {
  return (
    <StyledList>
      {Techs.map((tech) => (
        <TechItem name={tech.title} nivel={tech.status} key={tech.id} />
      ))}
    </StyledList>
  );
};

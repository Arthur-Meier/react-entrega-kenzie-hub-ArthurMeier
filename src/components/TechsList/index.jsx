import React, { useContext, useState } from "react";
import { StyledList } from "./style";
import TechItem from "./TechItem";
import PatchTechModal from "../modal/PatchTechModal";
import { TechContext } from "../../providers/TechContext";

export const TechsList = () => {
  const { Techs, patchTechId, setPatchTechId } = useContext(TechContext);

  return (
    <>
      <PatchTechModal
        isOpen={!!patchTechId}
        onClose={() => setPatchTechId(undefined)}
        techId={patchTechId}
      />
      <StyledList>
        {Techs.map((tech) => (
          <TechItem
            name={tech.title}
            nivel={tech.status}
            key={tech.id}
            onPatchItem={() => {
              setPatchTechId(tech.id);
            }}
          />
        ))}
      </StyledList>
    </>
  );
};

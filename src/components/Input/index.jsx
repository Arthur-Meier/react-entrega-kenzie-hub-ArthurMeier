import React from "react";
import { StyledFieldset } from "./style";

const Input = ({ Label, placeholder, register, error, type }) => {
  return (
    <StyledFieldset>
      <label htmlFor={register.name}>{Label}</label>
      <input
        type={type}
        id={register.name}
        placeholder={placeholder}
        {...register}
      />
      {error && <p>{error.message}</p>}
    </StyledFieldset>
  );
};

export default Input;

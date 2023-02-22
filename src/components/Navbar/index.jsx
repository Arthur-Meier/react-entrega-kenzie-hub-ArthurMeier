import React, { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import { UserContext } from "../../providers/UserContext";
import { StyledButton, StyledNav } from "./styled";

export const Navbar = ({ name }) => {
  const { logout } = useContext(UserContext);

  return (
    <StyledNav>
      <img className="Logo" src={Logo} alt="Logo Kenzie Hub" />
      <StyledButton to="/" onClick={logout}>
        {name}
      </StyledButton>
    </StyledNav>
  );
};

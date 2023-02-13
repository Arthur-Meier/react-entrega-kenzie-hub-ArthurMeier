import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyledNav } from "./styled";

export const Navbar = ({ name }) => {
  const logout = () => {
    window.localStorage.clear();
  };

  return (
    <StyledNav>
      <img className="Logo" src={Logo} alt="Logo Kenzie Hub" />
      <Link to="/" onClick={logout}>
        {name}
      </Link>
    </StyledNav>
  );
};

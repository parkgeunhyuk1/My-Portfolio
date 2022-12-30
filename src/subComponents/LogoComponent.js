import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  const navigate = useNavigate();
  return (
    <Logo
      onClick={() => {
        navigate("/");
      }}
      color={props.theme}
    >
      PKH
    </Logo>
  );
};

export default LogoComponent;

import React from "react";
// import LogoImage from '../../images/logo.svg';
import { Wrapper } from "./Header.styles";
import { Navbar } from "../Navbar/Navbar";
import { NavLink, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Wrapper>
        <NavLink to="/">
          {/* <Logo src={LogoImage} alt='movieDV-logo' /> */}
        </NavLink>
        <Navbar />
      </Wrapper>
      <Outlet />
    </>
  );
};

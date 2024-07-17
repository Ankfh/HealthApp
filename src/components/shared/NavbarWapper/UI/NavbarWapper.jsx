import React from "react";
import NavbarContainer from "../../../Navbar/Container/NavbarContainer";
import { UseDArkTheme } from "../../../DarkTheme/Context/ThemeContext";
import { useCssContext } from "../../../CssContext/context/CssContex";
const NavbarWapper = ({ children }) => {
  const { darkMode, toggleTheme } = UseDArkTheme();
  const { color } = useCssContext();

  return (
    <>
      <NavbarContainer />
      {children}
    </>
  );
};

export default NavbarWapper;

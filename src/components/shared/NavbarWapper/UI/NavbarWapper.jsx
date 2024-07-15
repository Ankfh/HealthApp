import React from "react";
import NavbarContainer from "../../../Navbar/Container/NavbarContainer";
import { UseDArkTheme } from "../../../DarkTheme/Context/ThemeContext";
import { useCssContext } from "../../../CssContext/context/CssContex";
const NavbarWapper = ({ children }) => {
  const { darkMode, toggleTheme } = UseDArkTheme();
  const { color } = useCssContext();

  return (
    <div className={darkMode ? color.bg : `bg-green-100`}>
      <NavbarContainer />
      {children}
    </div>
  );
};

export default NavbarWapper;

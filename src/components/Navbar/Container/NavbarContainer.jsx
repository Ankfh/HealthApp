import React, { useState } from "react";
import Navbar from "../UI/Navbar";
import { UseDArkTheme } from "../../DarkTheme/Context/ThemeContext";
import { oNlogoutClick } from "../services/NavbarServices";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../Global/context/GlobalStateProvider";
import logo from "../../../assets/logo.png";

const NavbarContainer = () => {
  const { darkMode, toggleTheme } = UseDArkTheme();
  const { setselectedTab, selectedTab } = useGlobalState();
  const navigate = useNavigate();
  const logoutClick = () => {
    oNlogoutClick(navigate);
  };
  const capital =
    localStorage.getItem("user_name")?.trim()?.charAt(0)?.toUpperCase() ?? null;

  const buttonClick = () => {
    navigate("/signup");
  };
  return (
    <Navbar
      toggleTheme={toggleTheme}
      darkMode={darkMode}
      capital={logo}
      logoutClick={logoutClick}
      setselectedTab={setselectedTab}
      selectedTab={selectedTab}
      navigate={navigate}
      buttonClick={buttonClick}
    />
  );
};

export default NavbarContainer;

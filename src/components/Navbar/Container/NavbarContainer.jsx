import React, { useState } from "react";
import Navbar from "../UI/Navbar";
import { UseDArkTheme } from "../../DarkTheme/Context/ThemeContext";
import { oNlogoutClick } from "../services/NavbarServices";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../Global/context/GlobalStateProvider";
import logo from "../../../assets/logo.png";

const NavbarContainer = () => {
  const { darkMode, toggleTheme } = UseDArkTheme();
  const { setselectedTab, selectedTab, isLoggedIn, setisLoggedIn } =
    useGlobalState();
  const navigate = useNavigate();
  const logoutClick = () => {
    if (isLoggedIn) {
      oNlogoutClick(navigate);
      setisLoggedIn(false);
    } else {
      navigate("/login");
    }
  };
  const nameFirst =
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
      nameFirst={nameFirst}
    />
  );
};

export default NavbarContainer;

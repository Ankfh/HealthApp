import React, { createContext, useContext } from "react";
import useDarkMode from "../ConstomHook/useDarkMode";
const DarkThemeContext = createContext();
export const DarkThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useDarkMode();
  console.log(darkMode, "innav");

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export const UseDArkTheme = () => {
  return useContext(DarkThemeContext);
};

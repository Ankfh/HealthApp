import React, { createContext, useContext } from "react";
import useColor from "../../style/colors/Color";
const CssContex = createContext();

export const CssProvider = ({ children }) => {
  const { color } = useColor();

  return <CssContex.Provider value={{ color }}>{children}</CssContex.Provider>;
};

export const useCssContext = () => {
  return useContext(CssContex);
};

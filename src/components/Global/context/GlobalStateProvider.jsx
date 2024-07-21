import React, { createContext, useContext, useState } from "react";
const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [selectedTab, setselectedTab] = useState(null);

  return (
    <GlobalStateContext.Provider value={{ selectedTab, setselectedTab }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export { useGlobalState, GlobalStateProvider };

import React, { createContext, useContext, useEffect, useState } from "react";
const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [selectedTab, setselectedTab] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("user_name");
      console.log(user,'login')
      if (user) {
        setisLoggedIn(user);
      }
    };
    checkLogin();
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{ selectedTab, setselectedTab, isLoggedIn, setisLoggedIn }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export { useGlobalState, GlobalStateProvider };

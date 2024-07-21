import React, { useEffect } from "react";
import About from "../view/About";
import { useGlobalState } from "../../Global/context/GlobalStateProvider";

const AboutContainer = () => {
  const { setselectedTab, selectedTab } = useGlobalState();
  useEffect(() => {
    setselectedTab("ABOUT");
  }, []);
  return (
    <>
      <About />
    </>
  );
};

export default AboutContainer;

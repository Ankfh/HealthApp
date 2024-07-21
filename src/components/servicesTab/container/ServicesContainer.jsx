import React, { useEffect } from "react";
import Services from "../view/Services";
import { useGlobalState } from "../../Global/context/GlobalStateProvider";

const ServicesContainer = () => {
  const { setselectedTab, selectedTab } = useGlobalState();
  useEffect(() => {
    setselectedTab("SERVICES");
  }, []);
  return (
    <>
      <Services />
    </>
  );
};

export default ServicesContainer;

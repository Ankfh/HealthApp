import React, { useEffect } from "react";
import HomeUI from "../view/HomeUI";
import { useGlobalState } from "../../Global/context/GlobalStateProvider";

const HomeContainer = () => {
  const { setselectedTab, selectedTab } = useGlobalState();
  useEffect(() => {
    setselectedTab("HOME");
  }, []);

  return (
    <div>
      <HomeUI />
    </div>
  );
};

export default HomeContainer;

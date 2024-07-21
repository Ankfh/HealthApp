import React, { useEffect } from "react";
import TeamView from "../view/TeamView";
import { useGlobalState } from "../../Global/context/GlobalStateProvider";

const TeamContainer = () => {
  const { setselectedTab, selectedTab } = useGlobalState();
  useEffect(() => {
    setselectedTab("TEAM");
  }, []);
  return (
    <>
      <TeamView />
    </>
  );
};

export default TeamContainer;

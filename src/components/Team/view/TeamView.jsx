import React from "react";
import FounderProfile from "./FounderProfile";
import FooterUi from "../../shared/Footer/UI/FooterUi";

const TeamView = () => {
  return (
    <div className="pt-10">
      <FounderProfile />
      <div className="mt-10">
        <FooterUi />
      </div>
    </div>
  );
};

export default TeamView;

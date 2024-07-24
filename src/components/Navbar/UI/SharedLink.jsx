import React from "react";
import OnTabClicked from "../services/OnTabClicked";

const SharedLink = (props) => {
  const handleClick = async () => {

    OnTabClicked(props.setSelectedTab, props.navigate, props.menu);
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-[#f95700] px-4 py-2 flex items-center justify-center font-bold cursor-pointer transition duration-300 hover:text-white ${
        props.selectedTab === props.menu ? "text-white" : "text-black"
      }`}
    >
      {props.menu}
    </div>
  );
};

export default SharedLink;

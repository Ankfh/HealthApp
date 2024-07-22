import React from "react";

const LogoUI = ({ capital }) => {
  return (
    capital && (
      <span className="w-[140px] h-[50px] ml-10 flex justify-center items-center cursor-pointer">
        <img src={capital} alt="Logo" />
      </span>
    )
  );
};

export default LogoUI;

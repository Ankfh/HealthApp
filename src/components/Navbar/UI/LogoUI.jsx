import React from "react";

const LogoUI = ({ capital }) => {
  return (
    capital && (
      <span className="font-semibold text-2xl no-underline bg-[#1a237e] rounded-md  text-white ml-3 px-3 cursor-pointer">
        <p>{capital}</p>
      </span>
    )
  );
};

export default LogoUI;

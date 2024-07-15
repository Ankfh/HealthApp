import React from "react";

const CardTemplate = ({ children }) => {
  return (
    <div className=" border-2 rounded-tr-[4.4rem] rounded-bl-[4.4rem] border-blue-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] justify-center items-center flex flex-col gap-4 p-[3.75rem]">
      {children}
    </div>
  );
};

export default CardTemplate;

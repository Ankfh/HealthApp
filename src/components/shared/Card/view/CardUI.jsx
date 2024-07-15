import React from "react";

const CardUI = (props) => {
  return (
    <div className=" w-full max-w-64 rounded-sm h-72 border-4 border-green-500  flex flex-col ">
      <div className="border-4 border-green-500">{props?.ownerName}</div>
      <div>image</div>
      <div>
        <p>price: {props?.price}</p>
        <p>Name: {props?.poductName}</p>
      </div>
    </div>
  );
};

export default CardUI;

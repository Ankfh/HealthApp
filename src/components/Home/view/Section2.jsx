import React from "react";
import first from "../../../assets/pic.png";
import third from "../../../assets/strawb.png";
import secound from "../../../assets/section21.png";

const Section2 = () => {
  return (
    <>
      <div className="w-full mx-auto relative px-4 md:px-16">
        <h1 className="text-2xl font-bold text-center">Why Healthy</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <img
            src={secound}
            alt="Dumbbell and Vegetables"
            className="order-2 md:order-1 w-1/2 md:w-1/6"
          />
          <img
            src={first}
            alt="Salad"
            className="order-1 md:order-2 w-1/2 md:w-1/3"
          />
        </div>
        <img
          src={third}
          alt="Strawberries"
          className="absolute -bottom-40 left-0 w-1/4 md:w-1/6"
        />
      </div>
    </>
  );
};

export default Section2;

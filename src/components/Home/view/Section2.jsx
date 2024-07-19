import React from "react";
import sectionImge from "../../../assets/pic.png";
import sectionsImage2 from "../../../assets/strawb.png";
import section21Image from "../../../assets/section21.png";

const Section2 = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-center mb-8">Why healthy</h1>

      <div className="flex w-full ml-20">
        <img src={section21Image} alt="Salad" className="" />
        <img src={sectionImge} alt="Meditation" className="" />
      </div>
      <img src={sectionsImage2} alt="Dumbbell and Vegetables" className="" />
    </div>
  );
};

export default Section2;

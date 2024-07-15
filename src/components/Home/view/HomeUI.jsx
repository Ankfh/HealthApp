import React from "react";
import HeroSection from "./HeroSection";
import VisionMissionSection from "./VisionMissionSection";

const HomeUI = () => {
  return (
    <div className="w-full  pt-10 bg-white">
      <HeroSection />
      <VisionMissionSection />
    </div>
  );
};

export default HomeUI;

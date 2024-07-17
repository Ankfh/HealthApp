import React from "react";
import HeroSection from "./HeroSection";
import VisionMissionSection from "./VisionMissionSection";
import AboutUs from "./AboutUs";
import HelpSection from "./HelpSection";
import FooterUi from "./../../shared/Footer/UI/FooterUi";

const HomeUI = () => {
  return (
    <div className="w-full  pt-10 bg-white">
      <HeroSection />
      <VisionMissionSection />
      <AboutUs />
      <HelpSection />
      <FooterUi />
    </div>
  );
};

export default HomeUI;

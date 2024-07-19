import React from "react";
import HeroSection from "./HeroSection";
import VisionMissionSection from "./VisionMissionSection";
import AboutUs from "./AboutUs";
import HelpSection from "./HelpSection";
import FooterUi from "./../../shared/Footer/UI/FooterUi";
import Section2 from "./Section2";

const HomeUI = () => {
  return (
    <div className="w-full  pt-10 bg-white">
      <HeroSection />
      <VisionMissionSection />
      <Section2 />
      <AboutUs />
      <HelpSection />
      <FooterUi />
    </div>
  );
};

export default HomeUI;

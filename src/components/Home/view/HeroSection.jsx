import React from "react";
import heroVideo from "../../../assets/heroVideo.mp4";

const HeroSection = () => {
  return (
    <div className=" w-full h-[1400px] overflow-hidden">
      <video className="" src={heroVideo} autoPlay loop muted />
    </div>
  );
};

export default HeroSection;

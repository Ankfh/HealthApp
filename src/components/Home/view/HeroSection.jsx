import React from "react";
import heroVideo from "../../../assets/heroVideo.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default HeroSection;

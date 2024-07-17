import React from "react";
import heroVideo from "../../../assets/heroVideo.mp4";

const HeroSection = () => {
  return (
    <div className="w-full h-screen">
      <div className="relative h-full">
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          controls={false}
        />
      </div>
    </div>
  );
};

export default HeroSection;

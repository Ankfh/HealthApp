import React from "react";
import heroVideo from "../../../assets/heroVideo.mp4";

const HeroSection = () => {
  return (
    <div className="w-full ">
      <div className="relative">
        <video
          className="w-full h-full object-cover rounded-lg shadow-lg"
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

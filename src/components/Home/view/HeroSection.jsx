import React from "react";
import heroVideo from "../../../assets/heroVideo.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center bg-black">
      <video
        className="w-auto h-full"
        src={heroVideo}
        autoPlay
        loop
        muted
        controls={false}
      />
    </div>
  );
};

export default HeroSection;

import React from "react";
import banner from "../../../assets/banner.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-white pt-35">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-20">
        {/* Text Section */}
        <div className="mt-20 ">
          <div className="w-full pt-10">
            <h1 className="font-bold text-pretty text-[30px] text-center p-4 bg-orange-600 uppercase text-white">
              MindFull Living Clud
            </h1>
            <img
              src={banner}
              alt="Studio Setup"
              className="w-full h-auto mt-2 border-2 border-orange-400"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-20 lg:mt-5">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              OUR APPROCHES
            </h2>
            <p className="text-lg text-black leading-relaxed text-justify">
              There is enough scientific research that has shown that the human
              body could heal itself if it is free of toxins, and stress and is
              provided with proper nutrients and emotional support. We are
              passionate about promoting community well-being and empowering
              individuals to overcome health challenges. Our cost-effective
              solutions and evidence-based approach have helped countless
              individuals transform their lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

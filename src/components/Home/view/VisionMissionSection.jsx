import React from "react";
import service2 from "../../../assets/service5.jpg"; // replace with your image path
import service1 from "../../../assets/service6.jpg";
import service10 from "../../../assets/service10.png";
import service7 from "../../../assets/service7.jpg";

const VisionMissionSection = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Mission Section */}
          <div className="flex-1 p-8 bg-blue-100 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-blue-500 inline-block">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Mindful Living Club empowers individuals to achieve health goals
              by educating them on the impact of daily routines—nutrition,
              exercise, and stress management—supported by coaches and
              healthcare providers.
            </p>
          </div>

          {/* Revised Mission Section */}
          <div className="flex-1 p-8 bg-green-100 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-green-500 inline-block">
              Revised Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Mission: Mindful Living Club empowers individuals to achieve
              health goals by giving them cost-effective easy-to-follow
              guidelines and tools and by educating them on the impact of daily
              routines—nutrition, exercise, and stress management—supported by
              coaches and healthcare providers. So this is just FYI so you
              understand when you creating the marketing video.. no need to
              change anything, I will revise the content all at once.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 lg:px-8 mt-8">
        <div className="flex-1 p-8 bg-customRed rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-white inline-block">
            About Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <img
              src={service1}
              alt="Person 1"
              className="w-full h-80 object-cover bg-white p-2"
            />
            <img
              src={service2}
              alt="Person 2"
              className="w-full h-80 object-cover bg-white p-2"
            />
            <img
              src={service10}
              alt="Person 3"
              className="w-full h-80 object-cover bg-white p-2"
            />
            <img
              src={service7}
              alt="Person 3"
              className="w-full h-80 object-cover bg-white p-2"
            />
          </div>

          <p className="text-lg text-white leading-relaxed text-justify mt-4">
            Tired of feeling sluggish? It’s time to unlock your vibrant health!
            We’re on a mission to empower our community with the knowledge to
            bridge the gap between a healthy lifestyle and feeling fantastic.
            Imagine: boundless energy, a stronger you, and a happier life.
            <a
              href="/about"
              className="text-black ml-1 inline-block hover:underline hover:text-white text-lg"
            >
              Read More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;

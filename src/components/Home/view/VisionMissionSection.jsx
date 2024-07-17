import React from "react";

const VisionMissionSection = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Mission Section */}
          <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-blue-500 inline-block">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Mindful Living Club empowers individuals to achieve health goals
              by educating them on the impact of daily routines—nutrition,
              exercise, and stress management—supported by coaches and
              healthcare providers.
            </p>
          </div>

          {/* About Us Section */}

          {/* Vision Section */}
          <div className="flex-1 p-8 bg-white rounded-lg shadow-md">
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
              change anything, I will revise the content all at once.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8 bg-customGreen rounded-lg shadow-md m-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-900  inline-block text-white">
          About Us
        </h2>

        <p className="text-lg text-white  leading-relaxed text-justify">
          Tired of feeling sluggish? It’s time to unlock your vibrant health!
          We’re on a mission to empower our community with the knowledge to
          bridge the gap between a healthy lifestyle and feeling fantastic.
          Imagine: boundless energy, a stronger you, and a happier life.
          <a
            href="/about"
            className=" text-gray-300 ml-1 inline-block hover:underline hover:text-black text-lg "
          >
            Read More
          </a>
        </p>
      </div>
    </div>
  );
};

export default VisionMissionSection;

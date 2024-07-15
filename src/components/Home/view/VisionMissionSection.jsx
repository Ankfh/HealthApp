import React from "react";

const VisionMissionSection = () => {
  return (
    <div className="w-full py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Mission Section */}
        <div className="mb-16 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-blue-500 inline-block">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mindful Living Club empowers individuals to achieve health goals by
            educating them on the impact of daily routines—nutrition, exercise,
            and stress management—supported by coaches and healthcare providers.
          </p>
        </div>

        {/* Revised Mission Section */}
        <div className="mb-16 p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-green-500 inline-block">
            Revised Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mindful Living Club empowers individuals to achieve health goals by
            giving them cost-effective, easy-to-follow guidelines and tools and
            by educating them on the impact of daily routines—nutrition,
            exercise, and stress management—supported by coaches and healthcare
            providers. So this is just FYI so you understand when you creating
            the marketing video.. no need to change anything, I will revise the
            content all at once.
          </p>
        </div>

        {/* Dummy Text Section */}
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 border-b-4 border-purple-500 inline-block">
            Our Approach
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
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
  );
};

export default VisionMissionSection;

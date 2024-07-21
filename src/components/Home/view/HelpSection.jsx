import React from "react";
import nutritionistImage from "../../../assets/service11.jpg"; // replace with your image path
import chartImage from "../../../assets/two.png";
import third from "../../../assets/third.png";

const HelpSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-4 md:p-20">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="relative w-full md:w-1/2 flex items-end mb-10 md:mb-0">
          <div
            className="absolute left-0 bottom-0 bg-customGreen rounded-3xl"
            style={{ width: "60%", height: "70%" }}
          ></div>
          <img
            src={nutritionistImage}
            alt="Nutritionist"
            className="relative w-full h-80 md:w-50 rounded-lg shadow-lg"
          />
        </div>
        <div className="text-content w-full md:w-1/2 mb-6 md:mb-0 md:ml-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-orange-600 ml-5">
            We’ve helped thousands of people find clinical nutrition care.
          </h2>
          <div className="stats w-full flex flex-col md:flex-row justify-around items-center mt-10">
            <div className="stat bg-gray-200 p-4 rounded-lg shadow-md text-center w-full md:w-1/4 mb-4 md:mb-0 mx-2">
              <p className="value text-2xl font-bold text-orange-600">
                0k<sup>+</sup>
              </p>
              <p className="text-gray-600">sessions</p>
            </div>
            <div className="stat bg-gray-200 p-4 rounded-lg shadow-md text-center w-full md:w-1/4 mb-4 md:mb-0 mx-2">
              <p className="value text-2xl font-bold text-orange-600">
                0k<sup>+</sup>
              </p>
              <p className="text-gray-600">patients served</p>
            </div>
            <div className="stat bg-gray-200 p-4 rounded-lg shadow-md text-center w-full md:w-1/4 mb-4 md:mb-0 mx-2">
              <p className="value text-2xl font-bold text-orange-600">0%</p>
              <p className="text-gray-600">customized care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;

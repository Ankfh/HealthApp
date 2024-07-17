import React from "react";
import nutritionistImage from "../../../assets/one.png"; // replace with your image path
import chartImage from "../../../assets/two.png";
import third from "../../../assets/third.png";

const HelpSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 m-20">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="relative md:w-1/2 flex items-end m-10">
          <div
            className="absolute left-0 bottom-0 bg-customGreen rounded-3xl"
            style={{ width: "60%", height: "70%" }}
          ></div>
          <img
            src={nutritionistImage}
            alt="Nutritionist"
            className="relative  w-50 h-80 rounded-lg shadow-lg"
          />
          <img
            src={third}
            alt="Chart"
            className="absolute  top-1 ml-60  w-32 h-auto rounded-lg shadow-lg transform -translate-x-8 translate-y-8"
          />
          <img
            src={chartImage}
            alt="Chart"
            className="absolute mb-0 w-32 h-auto rounded-lg shadow-lg transform -translate-x-8 translate-y-8"
          />
        </div>
        <div className="text-content md:w-1/2 mb-6 md:mb-0 ml-6">
          <h2 className="text-3xl font-bold text-green-800 ">
            We’ve helped thousands of people find clinical nutrition care.
          </h2>
          <div className="stats w-full flex flex-col md:flex-row justify-around items-center mt-10">
            <div className="stat bg-gray-200 p-4 rounded-lg shadow-md text-center w-full md:w-1/4 mb-4 md:mb-0 mx-2">
              <p className="value text-2xl font-bold text-green-700">
                0k<sup>+</sup>
              </p>
              <p className="text-gray-600">sessions</p>
            </div>
            <div className="stat bg-gray-200 p-4 rounded-lg shadow-md text-center w-full md:w-1/4 mb-4 md:mb-0 mx-2">
              <p className="value text-2xl font-bold text-green-700">
                0k<sup>+</sup>
              </p>
              <p className="text-gray-600">patients served</p>
            </div>
            <div className="stat bg-gray-200 p-4 rounded-lg shadow-md text-center w-full md:w-1/4 mb-4 md:mb-0 mx-2">
              <p className="value text-2xl font-bold text-green-700">0%</p>
              <p className="text-gray-600">customized care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;

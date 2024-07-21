import React from "react";

const WhatYouGet = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Here's what you get</h1>
      <p className="text-gray-500 mb-8">
        Our personalized care always includes:
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-gray-800 text-white rounded-lg p-6 w-80">
          <h2 className="text-xl font-semibold mb-2">The Detox Way</h2>
          <p>
            The 28-day program is designed to detox your body and reset the
            metabolism so it could properly convert food into energy.
          </p>
        </div>
        <div className="bg-gray-800 text-white rounded-lg p-6 w-80">
          <h2 className="text-xl font-semibold mb-2">Arkaya Yoga Routine</h2>
          <p>
            Arkaya is a Sanskrit word for a light that heals and inspires. This
            practice aims at improving the flexibility of your body to detox and
            reset it to its original state.
          </p>
        </div>
        <div className="bg-gray-800 text-white rounded-lg p-6 w-80">
          <h2 className="text-xl font-semibold mb-2">
            Unlock the Secrets of Healthy Cooking for Weight Loss
          </h2>
          <p>
            Discover the art of cooking for weight management with our Cooking
            Technique for Weight Loss program.
          </p>
        </div>
      </div>
      <div className="mt-40 bg-orange-300 p-10">
        <h1 className="text-[20px] text-black">
          Get the Services from us to DETOX AND REPAIR YOUR BODY & FIGHT DISEASE
          <button className="bg-orange-600 text-white font-bold py-2 px-8 rounded  ml-20 hover:bg-orange-400 hover:text-black">
            JOIN US
          </button>
        </h1>
      </div>
    </div>
  );
};

export default WhatYouGet;

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import service8 from "../../../assets/service8.jpg";

const Main = () => {
  return (
    <div className="container mx-auto">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${service8})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
          <h1 className="text-[40px] font-bold">MINDFUL LIVING CLUB</h1>
          <h2 className="text-[30px] font-semibold mt-4">
            Everyone Must Eat Food that Nourishes
          </h2>
        </div>
      </div>
      <div className="bg-white mt-5 p-5 ">
        <h1 className="ml-20 font-bold">ABOUT US</h1>
        <ul className="text-center">
          <li className="my-2 font-semibold">
            The Detox way - With Fast Metabolism Diet.
          </li>
          <li className="my-2 text-center font-semibold">
            Arkaya Yoga Routine: TO DETOX AND REPAIR YOUR BODY & FIGHT DISEASE.
          </li>
        </ul>
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4 mx-20">
        <div className="lg:col-span-1 grid grid-cols-1 gap-4">
          <div className="flex items-center bg-orange-600 p-2 rounded shadow border border-gray-300 whitespace-nowrap overflow-hidden">
            <CheckCircleIcon className="text-white mr-2" />
            <span>Weekly Recipes</span>
          </div>
          <div className="flex items-center bg-orange-600  p-2 rounded shadow border border-gray-300 whitespace-nowrap overflow-hidden">
            <CheckCircleIcon className="text-white mr-2" />
            <span>Daily Alert and Reminders</span>
          </div>
          <div className="flex items-center bg-orange-600  p-2 rounded shadow border border-gray-300 whitespace-nowrap overflow-hidden">
            <CheckCircleIcon className="text-white mr-2" />
            <span>Motivation Tips</span>
          </div>
          <div className="flex items-center bg-orange-600  p-2 rounded shadow border border-gray-300 whitespace-nowrap overflow-hidden">
            <CheckCircleIcon className="text-white mr-2" />
            <span>Cheat Suggestions</span>
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-center items-center">
          <img src={service8} alt="Example" className="rounded " />
        </div>
        <div className="lg:col-span-1 flex justify-center items-center">
          <img src={service8} alt="Example" className="rounded " />
        </div>
      </div>
      <div className="mt-10 bg-orange-600  p-4  shadow-md text-center m-20 uppercase font-bold">
        Unlocking the Power of Nutrition for Vibrant Living.
      </div>
    </div>
  );
};

export default Main;

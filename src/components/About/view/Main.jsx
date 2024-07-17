import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Main = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-green-800 text-[25px] font-semibold">
          ABOUT MINDFUL LIVING CLUB
        </h1>
      </div>
      <div className="mt-5">
        <h1 className="text-[30px] font-bold text-center uppercase">
          Everyone Must Eat Food that Nourishes
        </h1>
      </div>
      <div className="bg-white mt-5 p-5 rounded shadow-md">
        <ul className="list-decimal pl-5">
          <li className="my-2 text-start">
            The Detox way - With Fast Metabolism Diet.
          </li>
          <li className="my-2 text-start">
            Arkaya Yoga Routine: TO DETOX AND REPAIR YOUR BODY & FIGHT DISEASE.
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <ul className="list-none space-y-2">
          <li className="flex items-center">
            <CheckCircleIcon className="text-green-600" />
            <span className="ml-2">Weekly Recipes</span>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="text-green-600" />
            <span className="ml-2">Daily Alert and Reminders</span>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="text-green-600" />
            <span className="ml-2">Motivation Tips</span>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="text-green-600" />
            <span className="ml-2">Cheat Suggestions</span>
          </li>
        </ul>
      </div>
      <div className="mt-5 bg-green-900 text-white p-4 rounded shadow-md text-center">
        "Unlocking the Power of Nutrition for Vibrant Living."
      </div>
    </div>
  );
};

export default Main;

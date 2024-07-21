import React from "react";
import profile from "../../../assets/service7.jpg";
import sign from "../../../assets/sign.png";

const FounderProfile = () => {
  return (
    <div className="relative text-center text-white">
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${profile})` }}
      >
        <h1 className="text-3xl m-0 p-5 bg-black bg-opacity-50">
          ABOUT MINDFUL LIVING CLUB
        </h1>
        <h2 className="text-2xl m-0 p-2 bg-black bg-opacity-50">
          Founder's Profile
        </h2>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-50 p-6 m-5 text-left w-4/5 max-w-lg">
          <h1 className="text-3xl m-0 p-5 bg-orange-600 ">Founder Profile</h1>
          <p>
            Bushra, our founder, is a healthcare professional with over 20 years
            of experience. She is a passionate advocate and an innovator in
            holistic health and chronic care management. She is a Certified CDC
            DPP & FMD Coach and Arkaya Yoga Teacher, dedicated to empowering
            individuals and communities to achieve optimal health through
            mind-body connection and through basic lifestyle changes. She is
            committed to creating a cost effective solution that can meet the
            needs of people who want to be healthy with the help of lifestyle
            change, and by nourishing their body with food, by distressing and
            by removing toxins.
          </p>
          <div className="text-center mt-5">
            <img src={sign} alt="Sign" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;

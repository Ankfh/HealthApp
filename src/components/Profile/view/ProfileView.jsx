import React from "react";
import AppointmentCard from "./AppointmentCard";
import UserCard from "./ProfileCard";

const ProfileView = (props) => {
  return (
    <>
      <h1 className="text-center pt-20 font-bold text-orange-600 text-[30px]">
        PROFILE
      </h1>
      <div className="flex justify-center">
        <div className="w-40 h-1 bg-orange-400 rounded-md"></div>
      </div>
      <div className="w-full flex flex-col md:flex-row pt-10">
        <div className="w-full md:w-1/2 p-2">
          <UserCard {...props} />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <AppointmentCard {...props} />
        </div>
      </div>
    </>
  );
};

export default ProfileView;

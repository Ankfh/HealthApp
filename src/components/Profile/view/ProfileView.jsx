import React from "react";
import AppointmentCard from "./AppointmentCard";
import UserCard from "./ProfileCard";

const ProfileView = (props) => {
  return (
    <div className="w-full text-center pt-20">
        <UserCard {...props} />
      <AppointmentCard {...props} />
    </div>
  );
};

export default ProfileView;

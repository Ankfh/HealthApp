import React from "react";

const ProfileIcon = ({ nameFirst }) => {
  const firstLetter = nameFirst ? nameFirst.charAt(0).toUpperCase() : "";
  return (
    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-orange-400 bg-white text-black font-bold text-lg hover:bg-orange-600 hover:text-white hover:font-serif">
      {nameFirst}
    </div>
  );
};

export default ProfileIcon;

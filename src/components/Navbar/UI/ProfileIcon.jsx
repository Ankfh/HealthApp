import React from 'react';

const ProfileIcon = ({ nameFirst }) => {
  const firstLetter = nameFirst ? nameFirst.charAt(0).toUpperCase() : '';
console.log(nameFirst,'namefirst')
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg">
      {nameFirst}
    </div>
  );
};

export default ProfileIcon;

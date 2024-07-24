import React from 'react';

const UserCard = (props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-gray-800 mb-2">{props.fullName}</div>
        <div className="text-gray-600 mb-4">{props.city}</div>
        <div className="bg-gray-200 p-4 rounded-lg w-full">
          <p className="text-gray-700 mb-2">{props.age}</p>
          <p className="text-gray-700 mb-2">{props.gender}</p>
        </div>
      </div>
    </div>
  );
};



export default UserCard;

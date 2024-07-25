import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserCard = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.age || !props.gender) {
      navigate("/detail");
    }
  }, [navigate]);
  return (
    <div className="bg-orange-600 shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <h1 className="bg-orange-600 text-white p-2 text-[25px] rounded-md pl-6 pr-6 font-bold">
        Personal Information
      </h1>
      <div className="w-full h-2 bg-white rounded-md"></div>
      <div className="flex flex-col items-center pt-6">
        <div className="font-bold text-white mb-2">
          <span>Name: </span>
          {props.fullName}
        </div>
        <div className="text-white mb-2 font-bold p-2">
          <span>City: </span>
          {props.city}
        </div>
        <div className="">
          <p className="text-white mb-2 font-bold p-2">
            <span>Age: </span>
            {props.age}
          </p>
          <p className="text-white mb-2 font-bold p-2">
            <span>Gender: </span>
            {props.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

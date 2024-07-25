import React from "react";
import { format, isValid } from "date-fns";

const AppointmentCard = (props) => {
  const { appointmentDate, userName, status } = props;

  const date = new Date(appointmentDate);

  // Check if the date is valid
  const formattedDate = isValid(date)
    ? format(date, "MMMM d, yyyy")
    : "Invalid date";
  const formattedTime = isValid(date)
    ? format(date, "hh:mm a")
    : "Invalid time";

  return (
    <div className=" bg-orange-600 rounded-xl shadow-md overflow-hidden md:max-w-2xl mr-10">
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold text-black">Appointment</h1>
      </div>
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg text-white  font-bold p-1">
            {status}
          </div>
          <div className="uppercase tracking-wide text-sm text-black p-1">
            {formattedDate}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black p-1">
            {formattedTime}
          </p>
          <p className="mt-2 text-gray-950">
            Visit Us for Further Information!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;

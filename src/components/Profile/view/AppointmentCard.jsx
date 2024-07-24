import React from 'react';
import { format, isValid } from 'date-fns';

const AppointmentCard = (props) => {
  const { appointmentDate, userName, status } = props;

  const date = new Date(appointmentDate);

  // Check if the date is valid
  const formattedDate = isValid(date) ? format(date, 'MMMM d, yyyy') : 'Invalid date';
  const formattedTime = isValid(date) ? format(date, 'hh:mm a') : 'Invalid time';

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold text-indigo-600">Appointment</h1>
      </div>
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {status}
          </div>
          <div className="uppercase tracking-wide text-sm text-gray-500">
            {formattedDate}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">
            {formattedTime}
          </p>
          <p className="mt-2 text-gray-500">Description goes here</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;

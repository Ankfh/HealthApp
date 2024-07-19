import React from "react";

const ServicesList = ({ services, onServiceClick }) => {
  return (
    <div className="space-y-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-lg shadow-lg cursor-pointer flex flex-col md:flex-row items-center"
          onClick={() => onServiceClick(service)}
        >
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={service.icon} // Assuming 'icon' contains the image URL
              alt={service.title}
              className="w-40 h-40 object-cover rounded-md shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
            <h3 className="text-2xl leading-8 font-bold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-4 text-lg text-gray-500">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;

import React from "react";

const ServicesList = ({ services, onServiceClick }) => {
  return (
    <div className="space-y-8 px-4 md:px-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg cursor-pointer flex flex-col md:flex-row items-center"
          onClick={() => onServiceClick(service)}
        >
          <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl leading-8 font-semibold text-white bg-orange-600 p-4 rounded-2xl">
              {service.title}
            </h3>
            <p className="mt-4 text-lg text-black">{service.description}</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={service.icon}
              alt={service.title}
              className="w-full md:w-3/4 h-60 object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;

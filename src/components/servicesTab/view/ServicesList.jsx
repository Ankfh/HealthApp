import React from "react";

const ServicesList = ({ services, onServiceClick }) => {
  return (
    <div className="space-y-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-lg shadow-lg cursor-pointer flex flex-col md:flex-row items-center mx-10 "
          onClick={() => onServiceClick(service)}
        >
          <div className="w-full md:w-2/2 text-center md:text-left ">
            <h3 className="text-2xl leading-8 font-semibold text-white bg-orange-600 p-4 rounded-2xl">
              {service.title}
            </h3>
            <p className="mt-4 text-lg text-black pl-4">
              {service.description}
            </p>
          </div>
          <div className="w-full md:w-2/2 flex justify-center mt-6 md:mt-0">
            <img
              src={service.icon}
              alt={service.title}
              className="w-100 h-60 object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;

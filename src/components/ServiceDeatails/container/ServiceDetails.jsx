import React from "react";

const ServiceDetails = ({ service, onBackClick }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <button
        className="bg-orange-600 py-2 px-8 font-semibold rounded-sm mb-4 text-white hover:bg-orange-500 hover:text-black"
        onClick={onBackClick}
      >
        BACK TO SERVICES
      </button>
      <div className="w-full flex justify-center mb-6">
        <img
          src={service.icon}
          alt={service.title}
          className="w-full h-200 object-cover rounded-md shadow-md"
          style={{ width: "700px", height: "380px" }}
        />
      </div>
      <h3 className="text-3xl leading-8 font-bold text-gray-900 text-center">
        {service.title}
      </h3>
      <p className="mt-4 text-lg text-gray-500 text-center">
        {service.description}
      </p>
      <p className="mt-6 text-base text-gray-700">{service.details}</p>
      {service.program_details && (
        <ul className="mt-6 list-disc pl-5 text-base text-gray-700">
          {service.program_details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceDetails;

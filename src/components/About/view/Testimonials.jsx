import React, { useState } from "react";
import team1 from "../image/Team-02.jpg";
import team2 from "../image/Team-05.jpg";
import team3 from "../image/Team-07.jpg";

const testimonials = [
  {
    quote:
      "Bushra has been a blessing during my treatment. Her kindness, patience, and professionalism are unparalleled. She went above and beyond to ensure I understood every aspect of my care plan and always made sure I felt supported. Her dedication to her patients is truly inspiring, and I can’t thank her enough for all she has done for me.",
    name: "Julia Ann",
    position: "MGR, COMPANY",
    image: team1,
  },
  {
    quote:
      "Physical therapist Bushra has transformed my life. After my accident, I struggled with mobility and pain. Bushra's tailored therapy sessions and constant encouragement helped me regain my strength and confidence. Her deep knowledge and genuine care for her patients shine through in every session. I am so thankful for her help and highly recommend her services.",
    name: "Moric Horgon",
    position: "CEO, COMPANY",
    image: team2,
  },
  {
    quote:
      "I am incredibly grateful for the care I received from Bushra. From the moment I walked into her office, I felt welcomed and comfortable. She took the time to listen to my concerns and provided a thorough examination. Her expertise and compassionate approach made all the difference in my recovery. I highly recommend Bushra to anyone seeking top-notch medical care.",
    name: "Jack leo",
    position: "COO, COMPANY",
    image: team3,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { quote, name, position, image } = testimonials[currentIndex];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-4 text-center">Testimonials</h2>
      <h3 className="text-2xl font-semibold mb-8 text-center">
        What Our Patients Say
      </h3>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevTestimonial}
          className="absolute left-0 bg-red-500 text-white rounded-full p-2 mx-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.707 4.293a1 1 0 010 1.414L8.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="max-w-xl text-center">
          <p className="text-lg italic mb-4">"{quote}"</p>
          <div className="flex items-center justify-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={image}
              alt={name}
            />
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-gray-500">{position}</p>
            </div>
          </div>
        </div>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 bg-red-500 text-white rounded-full p-2 mx-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <h1 className="mt-40  text-center font-semibold ">
        A whole year of <b className="text-red-700">HEALTHYBITE </b>costs about
        the same as 1 hour with a nutrition expert
      </h1>
    </div>
  );
};

export default Testimonials;

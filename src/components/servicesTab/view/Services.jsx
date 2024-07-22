import React, { useState } from "react";
import ServicesList from "../view/ServicesList";
import ServiceDetails from "../../ServiceDeatails/container/ServiceDetails";
import service1 from "../../../assets/service1.jpg";
import service2 from "../../../assets/service2.jpg";
import service3 from "../../../assets/service3.jpg";
import service4 from "../../../assets/service4.jpg";
import WhatYouGet from "./WhatYouGet";
import Testimonials from "./../../About/view/Testimonials";
import FooterUi from "./../../shared/Footer/UI/FooterUi";

const services = [
  {
    title: "The Detox way With Fast Metabolism Diet",
    description:
      "The 28-day program is designed to detox your body and reset the metabolism so it could properly convert food into energy…",
    icon: service3,
    details:
      "The 28-day program is designed to detox your body and reset the metabolism so it could properly convert food into energy. The program will teach you how to eat nourishing foods that will give you energy and help lose weight. No more calorie counting and eating limited foods to achieve the optimum weight. The program will also teach you stress management techniques that will help you calm your mind and body. It's a holistic weight loss and complete body transformation program, based on modern scientific principles of food science, and ancient Asian science of Ayurveda.",
    program_details: [
      "Weekly Educational Webinars on Food and Nutrition",
      "Rules of Eating",
      "Guidelines for Grocery Shopping",
      "Meal Preparation",
      "Meal Plans with Portions",
      "Workout Suggestions (including cardio, strength, and yoga)",
      "Weekly Recipes",
      "Daily Alerts and Reminders",
      "Motivation Tips",
      "Cheat Suggestions",
      "Post Program Maintenance Guidance (with the monthly/annual membership)",
      "Tips and Tricks to Prevent Chronic Diseases and Diabetes based on CDC Guidelines",
    ],
  },
  {
    title: "Arkaya Yoga Routine: TO DETOX AND REPAIR YOUR BODY & FIGHT DISEASE",
    description:
      "Arkaya is a Sanskrit word for a light that heals and inspires. This practice aims at improving the flexibility of your body to detox and reset it to its original state…",
    icon: service2,
    details:
      "Arkaya is a Sanskrit word for a light that heals and inspires. This practice aims at improving the flexibility of your body to detox and reset it to its original state. It replaces the old energy patterns with new by creating new pathways for energy flow in body through good posture, deeper & more complete breathing and mind alignment with the present moment.  This is a meditative practice that creates inner awareness and tap your body’s own power to nourish and rejuvenate. This course will focus on teaching various techniques as well as practicing them for setting the foundation for a good yoga practice that is beneficial for your body. These techniques will equip you with skills to unwound and destress on or off your yoga matt. Some of these techniques can be used while driving, during your work calls or in your routine yoga classes.",
    program_details: [],
  },
  {
    title: "Unlock the Secrets of Healthy Cooking for Weight Loss",
    description:
      "Discover the art of cooking for weight management with our Cooking Technique for Weight Loss program. In this enlightening journey….",
    icon: service1,
    details:
      "Discover the art of cooking for weight management with our Cooking Technique for Weight Loss program. In this enlightening journey, you’ll gain a deep understanding of the foods that empower weight control, master cooking techniques that preserve vital nutrients, and explore the world of herbs and spices that supercharge your metabolism. As part of this immersive experience, you’ll craft a personalized 3-day menu tailored to your dietary preferences, ensuring that your culinary creations align perfectly with your health goals. But our program goes beyond the kitchen. We’ll also introduce you to community wellness programs that can serve as your steadfast allies in your quest to shed pounds, maintain a healthy weight, and achieve optimal well-being. Join us today, and let’s embark on a flavorful and nutritious journey towards your weight loss and wellness goals.”",
    program_details: [],
  },
  {
    title:
      "Lifestyle-Driven Health Education:Empowering Through Seminars & Workshops",
    description:
      "Join our enlightening public and community workshops, where we shed light on the profound impact of…",
    icon: service4,
    details:
      "Join our enlightening public and community workshops, where we shed light on the profound impact of lifestyle choices on individual health. Discover the keys to a healthier, more vibrant life!”",
    program_details: [],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedService ? (
            <ServiceDetails
              service={selectedService}
              onBackClick={handleBackClick}
            />
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-base text-orange-600 text-[42px] font-extrabold tracking-wide uppercase pt-10">
                  Our Services
                </h2>
                <p className="mt-8 text-3xl leading-8  tracking-tight font-semibold sm:text-4xl">
                  Tailored Solutions For Your Needs
                </p>
                <p className="mt-4 max-w-2xl text-xl bg-orange-600 font-semibold p-4 mx-auto text-auto border-e-4 rounded-md text-white">
                  Explore our range of services designed to help you achieve
                  your goals.
                </p>
              </div>
              <div class="w-full h-px bg-green-500 my-4 mt-10"></div>

              <div className="mt-10">
                <ServicesList
                  services={services}
                  onServiceClick={handleServiceClick}
                />
              </div>
              <div className="mt-20">
                <WhatYouGet />
              </div>
              <div>
                <Testimonials />
              </div>
            </>
          )}
        </div>
      </div>
      <FooterUi />
    </>
  );
};

export default Services;

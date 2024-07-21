import React from "react";
import two from "../image/one.png";
import one from "../image/two.png";
import third from "../image/third.png";
import fourth from "../image/fouth.jpeg";
import fifth from "../../../assets/service7.jpg";
import six from "../../../assets/service8.jpg";
import seven from "../../../assets/service10.png";
import eight from "../../../assets/service11.jpg";

const principles = [
  {
    title: "CDC Guideline for Diabetes Prevention and Weight Loss",
    description:
      "Rooted in scientific rigor, this guideline serves as a cornerstone for our philosophy, emphasizing proactive measures for health maintenance.",
    image: one,
  },
  {
    title: "Haylie Pomroy’s Fast Metabolism Diet program (FMD)",
    description:
      "Pomroy’s insights on reigniting the body’s metabolic fire resonate deeply with our ethos. By shifting away from restrictive diets and embracing abundance, we empower individuals to reclaim control over their metabolism and achieve sustainable weight management.",
    image: two,
  },
  {
    title: "Michael Pollan’s Food Rules",
    description:
      "Pollan’s renowned wisdom simplifies the complex landscape of nutrition, offering practical guidance on making wholesome food choices. With his principles at our core, we navigate the intricacies of dietary decisions with clarity and purpose.",
    image: fifth,
  },
  {
    title:
      "Alice Water’s Farm To Table principles from Berkeley Food Institute “Edible 101”",
    description:
      "Grounded in sustainability and community, this ethos underscores our commitment to sourcing fresh, locally-produced ingredients. By championing the Farm to Table movement, we honor the interconnectedness of food systems and foster a deeper appreciation for the nourishment it provides.",
    image: six,
  },
  {
    title: "Maharishi (Saint) Vagbhad’s Ayurvedic philosophy",
    description:
      "With roots in ancient wisdom, Vagbhad’s teachings on the transformative power of food echo through the ages. Embracing the notion of “Kitchen as your Pharmacy,” we recognize the profound impact of diet on overall well-being, seeking to harness its healing potential to optimize health.",
    image: third,
  },
  {
    title: "Deepak Chopra’s Philosophy",
    description:
      "In aligning with Chopra’s holistic approach to spiritual and physical vitality, we embrace the timeless wisdom of the Seven Laws of Spiritual Success and Ageless Body Timeless Mind. By integrating mind-body practices into our philosophy, we cultivate resilience and vitality that transcends the limitations of age.",
    image: seven,
  },
  {
    title: "Arkaya Yoga Philosophy",
    description:
      "Through the transformative practice of Arkaya Yoga, we embark on a journey of self-discovery and renewal. By harnessing the power of posture, mind alignment, and breath, we facilitate a profound reset of the body’s metabolism, unlocking its innate capacity for healing and rejuvenation.",
    image: fourth,
  },
  {
    title: "Dan Buettner’s Bluezone Longevity project",
    description:
      "“The calculus of aging offers us two options: We can live a shorter life with more years of disability, or we can live the longest possible life with the fewest bad years. As my centenarian friends have shown me, the choice is largely up to us.” – Dan Buettner",
    image: eight,
  },
];

const GuidingPrinciples = () => {
  return (
    <div className="container mx-auto px-10 py-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Guiding Principles
      </h1>
      <p className="text-center mb-8">
        Our guiding principles encompass a holistic approach to health and
        well-being, drawing from a diverse array of esteemed sources:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="bg-white shadow-md overflow-hidden flex flex-col items-center"
          >
            <img
              className="w-3/4 h-80 object-cover"
              src={principle.image}
              alt={principle.title}
            />
            <div className=" w-3/4">
              <h2 className=" font-semibold mb-2 bg-orange-600 p-2 text-white text-center">
                {principle.title}
              </h2>
              <p className="text-gray-700 text-justify">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidingPrinciples;

import React from "react";
import Main from "../view/Main";
import GuidingPrinciples from "./GuidingPrinciples";
import Testimonials from "./Testimonials";
import Message from "./Message";
import FooterUi from "./../../shared/Footer/UI/FooterUi";

const About = () => {
  return (
    <div className="pt-20  text-center">
      <Main />
      <GuidingPrinciples />
      <Message />
      <Testimonials />
      <FooterUi />
    </div>
  );
};

export default About;

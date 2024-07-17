import React from "react";
import SecondPage from "../view/SecondPage";
import FirstPage from "../view/FirstPage";
import ThirdPage from "../view/ThirdPage";

const renderFormPages = (page, props) => {
  switch (page) {
    case 1:
      return <FirstPage {...props} />;
      break;
    case 2:
      return <SecondPage {...props} />;
      break;
    case 3:
      return <ThirdPage {...props} />;
      break;

    default:
      break;
  }
};

export default renderFormPages;

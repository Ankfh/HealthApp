import React from "react";
import InputField from "../../shared/InputField/UI/InputField";
import SelectInputView from "../../shared/SelectInput/view/SelectInputView";
import RadioButton from "../../shared/RadioButton/view/RadioButton";
import options from "../services/RadioOption";

const SecondPage = (props) => {
  return (
    <div className="flex flex-col gap-2">
    {options.map((option, index) => (
      <RadioButton
        key={index}
        name={option.name}
        control={props.control}
        label={option.label}
        errors={props.errors}
      />
    ))}
  </div>
  );
};

export default SecondPage;

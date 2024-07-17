import React from "react";
import formField from "../services/formField";
import InputField from "../../shared/InputField/UI/InputField";

const FourthPage = (props) => {
  return (
    <div className="flex flex-col gap-6">
    {formField()?.map((item, index) => (
      <InputField
      key={index}
      name={item.name}
      control={props.control}
      label={item.label}
      type="text"
      errors={props.errors}
    />
    ))}
  </div>
  );
};

export default FourthPage;

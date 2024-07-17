import React from "react";
import InputField from "../../shared/InputField/UI/InputField";
import SelectInputView from "../../shared/SelectInput/view/SelectInputView";

const ThirdPage = (props) => {
  return (
    <div className="flex  flex-col gap-10">
      <InputField
        name="firstName"
        control={props.control}
        label="First Name "
        type="text"
        errors={props.errors}
      />
    </div>
  );
};

export default ThirdPage;

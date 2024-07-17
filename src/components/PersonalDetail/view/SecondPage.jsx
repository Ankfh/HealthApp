import React from "react";
import InputField from "../../shared/InputField/UI/InputField";
import SelectInputView from "../../shared/SelectInput/view/SelectInputView";

const SecondPage = (props) => {
  return (
    <div className="flex  flex-col gap-10">
      <InputField
        name="firstName"
        control={props.control}
        label="First Name "
        type="text"
        errors={props.errors}
      />
      <InputField
        name="lastName"
        control={props.control}
        label="Last Name "
        type="text"
        errors={props.errors}
      />
      <InputField
        name="street"
        control={props.control}
        label="Street Address"
        type="text"
        errors={props.errors}
      />
      <div className="flex gap-2">
        <InputField
          name="city"
          control={props.control}
          label="City"
          type="text"
          errors={props.errors}
        />
        <InputField
          name="State"
          control={props.control}
          label="State/Province "
          type="text"
          errors={props.errors}
        />
      </div>
    </div>
  );
};

export default SecondPage;

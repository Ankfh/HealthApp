import React from "react";
import formField from "../services/formField";
import InputField from "../../shared/InputField/UI/InputField";
import SelectInputView from "../../shared/SelectInput/view/SelectInputView";

const FourthPage = (props) => {
  return (
    <div className="flex flex-col gap-6">
      <h4>Attach the lab tests or fill out the last lab test results.</h4>
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
      <div className="flex justify-center items-center gap-4">
        <div className="w-full">
          <SelectInputView
            name="testType"
            control={props.control}
            label="testType"
            type="text"
            errors={props.errors}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
        </div>
        <div className=" w-full pt-4">
          <InputField
            name={"testReport"}
            control={props.control}
            label={""}
            type="file"
            errors={props.errors}
          />
        </div>
      </div>
    </div>
  );
};

export default FourthPage;

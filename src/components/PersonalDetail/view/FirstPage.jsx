import React from "react";
import InputField from "../../shared/InputField/UI/InputField";
import SelectInputView from "../../shared/SelectInput/view/SelectInputView";

const FirstPage = (props) => {
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
          name="state"
          control={props.control}
          label="State/Province "
          type="text"
          errors={props.errors}
        />
      </div>

      <SelectInputView
        name="country"
        control={props.control}
        label="Country"
        type="text"
        errors={props.errors}
        options={props.countryList}
      />
      <InputField
        name="age"
        control={props.control}
        label="Age"
        type="text"
        errors={props.errors}
      />

      <SelectInputView
        name="ethnicity"
        control={props.control}
        label="Ethnicity"
        type="text"
        errors={props.errors}
        options={[
          { value: "asian", label: "Asian" },
          { value: "black", label: "Black or African American" },
          { value: "hispanic", label: "Hispanic or Latino" },
          { value: "white", label: "White" },
          { value: "native", label: "Native American or Alaska Native" },
          {
            value: "pacific",
            label: "Native Hawaiian or Other Pacific Islander",
          },
          { value: "other", label: "Other" },
        ]}
      />

      <InputField
        name="race"
        control={props.control}
        label="Race"
        type="text"
        errors={props.errors}
      />
      <SelectInputView
        name="gender"
        control={props.control}
        label="Gender"
        type="text"
        errors={props.errors}
        options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
        ]}
      />
      <InputField
        name="preferences"
        control={props.control}
        label="Dietry preferences (Non-Veg, Veg, Vegan, PBWF, Jain) "
        type="text"
        errors={props.errors}
      />
      <InputField
        name="type"
        control={props.control}
        label="Cusine type (American, Indian, Mexican, Italian, Meditarrian, Chinese)"
        type="text"
        errors={props.errors}
      />
      <InputField
        name="participant"
        control={props.control}
        label="Participant Height "
        type="text"
        errors={props.errors}
      />
      <InputField
        name="weight"
        control={props.control}
        label="Weight"
        type="text"
        errors={props.errors}
      />

      <InputField
        name="BMI"
        control={props.control}
        label="BMI "
        type="text"
        errors={props.errors}
      />
      <InputField
        name="phone"
        control={props.control}
        label="Phone "
        type="text"
        errors={props.errors}
      />
      <InputField
        name="DOB"
        control={props.control}
        label="DOB "
        type="text"
        errors={props.errors}
      />
      <InputField
        name="allergies"
        control={props.control}
        label="Any food Allergies "
        type="text"
        errors={props.errors}
      />
    </div>
  );
};

export default FirstPage;

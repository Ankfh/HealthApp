import React from "react";
import InputField from "../../shared/InputField/UI/InputField";
import SelectInputView from "../../shared/SelectInput/view/SelectInputView";
import RadioButton from "../../shared/RadioButton/view/RadioButton";
import RadioOption from "../services/RadioOption";
import TextAreaView from "../../shared/TextArea/view/TextArea";

const ThirdPage = (props) => {
  return (
    <div className="flex  flex-col gap-10">
      <TextAreaView
        name="description"
        control={props.control}
        label="Brief description of your major concern"
        type="text"
        errors={props.errors}
      />
      <TextAreaView
      name="history"
      control={props.control}
      label="Other Programs & Treatments tried"
      errors={props.errors}
      />
        <TextAreaView
      name="medicationHistory"
      control={props.control}
      label="List any medications you are taking including supplements."
      errors={props.errors}
      />
        <TextAreaView
      name="mentalHealth"
      control={props.control}
      label="Write about your mental and emotional state currently."
      errors={props.errors}
      />
    </div>
  );
};

export default ThirdPage;

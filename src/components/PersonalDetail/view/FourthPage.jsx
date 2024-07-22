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
            label="Select"
            type="text"
            errors={props.errors}
            options={[
              { value: "cbc", label: "Complete blood count CBC" },
              { value: "ery", label: "Erythrocyte sedimentation rate" },
              { value: "nit", label: "Blood Urea Nitrogen" },
              { value: "cre", label: "Creatinine" },
              { value: "cal", label: "Calcium" },
              { value: "lip", label: "Lipid Panel" },
              { value: "tri", label: "Triglycerides" },
              { value: "hdl", label: "HDL" },
              { value: "cho", label: "Cholesterol" },
              { value: "ldl", label: "LDL" },
              { value: "hba", label: "HBA1c" },
              { value: "vit", label: "Vit-D" },
              { value: "b12", label: "B12" },
              { value: "hom", label: "Homocysteine" },
              { value: "tft", label: "TFT- Thyroid" },
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

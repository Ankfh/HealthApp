import React, { useState } from "react";
import InputField from "../../shared/InputField/UI/InputField";
import MuiButton from "../../shared/Button/UI/MuiButton";
import SelectInputView from "../../shared/SelectInput/view/SelectInputView";
import renderFormPages from "../services/renderFormPages";
import FormSlider from "./FormSlider";

const PersonalDetailView = ({
  onSubmit,
  control,
  handleSubmit,
  errors,
  ...props
}) => {
  return (
    <div className="w-full flex justify-center items-center  ">
      <form
        className=" w-full md:max-w-[49rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full px-5 pt-16 pb-7   flex-col gap-8">
          <h2 className="w-full text-center font-bold text-lg pt-10">
            PLEASE ENTER YOUR DETAILS INFORMATION
          </h2>
          <FormSlider renderNo={props.renderNo} maxSteps={props.maxSteps} />
          {renderFormPages(props.renderNo, { control, errors, ...props })}
          <div className="w-full flex justify-between">
            <div>
              <MuiButton
                variant="contained"
                type="button"
                title={"Previous"}
                size={"small"}
                onClick={props.handlePrevious}
              />
            </div>

            <div>
              <MuiButton
                variant="contained"
                type="submit"
                title={props.renderNo === 4 ? "SUBMIT" : "Next"}
                size={"small"}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailView;

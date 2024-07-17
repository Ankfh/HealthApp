import React, { useState } from "react";
import InputField from "../../shared/InputField/UI/InputField";
import MuiButton from "../../shared/Button/UI/MuiButton";
import SelectInputView from "../../shared/SelectInput/view/SelectInputView";
import renderFormPages from "../services/renderFormPages";

const PersonalDetailView = ({
  onSubmit,
  control,
  handleSubmit,
  errors,
  ...props
}) => {
  const [renderNo, setrenderNo] = useState(1);
  const handleNext = () => {
    setrenderNo((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevious = () => {
    setrenderNo((prev) => Math.max(prev - 1, 1));
  };
  return (
    <div className="w-full flex justify-center items-center  ">
      <form
        className=" w-full md:max-w-[49rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full px-5 pt-16 pb-7   flex-col gap-8">
          <p className="w-full text-center">Sign Up</p>
          {renderFormPages(renderNo, { control, errors, ...props })}
          <div className="w-full flex justify-between">
            <div>
              <MuiButton
                variant="contained"
                type="button"
                title={"Previous"}
                size={"small"}
                onClick={handlePrevious}
              />
            </div>
            <div>
              <MuiButton
                variant="contained"
                type="button"
                title={"Next"}
                size={"small"}
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailView;

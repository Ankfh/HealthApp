import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";

const RadioButton = ({ name, control, label, errors }) => {
  return (
    <div className="w-full">
      <Controller
        name={name}
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} />}
            label={label}
          />
        )}
      />
      <p className="text-red-600 text-[10px] font-[800]">
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default RadioButton;

import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { MuiTextField } from "../style/muiTextField";

const InputField = ({ name, control, label, type, errors }) => {
  return (
    <div className="w-full">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <MuiTextField
            fullWidth
            {...field}
            label={label}
            size="small"
            type={type}
          />
        )}
      />
      <p className="text-red-600 text-[10px] font-[800]">
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default InputField;

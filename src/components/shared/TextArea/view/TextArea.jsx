import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { MuiTextField } from "../../InputField/style/muiTextField";

const TextAreaView = ({ name, control, label, type, errors }) => {
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
            multiline
            minRows={5} // Minimum number of rows to start with
            maxRows={10}
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

export default TextAreaView;

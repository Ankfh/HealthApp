import React from "react";
import { Controller } from "react-hook-form";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { MuiSelect } from "../style/muiSelect";

const InputSelect = ({ name, control, label, options, errors }) => {
  return (
    <div className="w-full">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <MuiSelect
            labelId={`${name}-label`}
            id={`${name}-select`}
            {...field}
            label={label}
            fullWidth
            size="small"
          >
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </MuiSelect>
        )}
      />
      <p className="text-red-600 text-[10px] font-[800]">
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default InputSelect;

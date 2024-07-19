import React from "react";
import { Controller } from "react-hook-form";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const DatePickerField = ({ name, control, label, errors }) => {
  return (
    <div className="w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          defaultValue={null}
          render={({ field: { onChange, value } }) => (
            <DesktopDatePicker
              label={label}
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={onChange}
              renderInput={(params) => (
                <TextField {...params} fullWidth size="small" />
              )}
            />
          )}
        />
        <p className="text-red-600 text-[10px] font-[800]">
          {errors[name]?.message}
        </p>
      </LocalizationProvider>
    </div>
  );
};

export default DatePickerField;

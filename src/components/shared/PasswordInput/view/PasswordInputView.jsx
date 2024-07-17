import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { MuiTextField } from "../../InputField/style/muiTextField";

const PasswordField = ({ name, control, label, type, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            type={showPassword ? "text" : type}
            InputProps={{
              endAdornment: (
                type === 'password' && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              ),
            }}
          />
        )}
      />
      <p className="text-red-600 text-[10px] font-[800]">
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default PasswordField;

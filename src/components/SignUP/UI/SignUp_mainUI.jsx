import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../shared/InputField/UI/InputField";
import SignUpValidation from "../helper/validation/validation";
import CardTemplate from "../../shared/CardWrapper/UI/CardTemplate";
import MuiButton from "../../shared/Button/UI/MuiButton";

const SignUpMian = ({ onSubmit, control, handleSubmit, errors }) => {
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardTemplate>
          <div className="flex  flex-col gap-4">
            <InputField
              name="name"
              control={control}
              label="Name"
              type="text"
              errors={errors}
            />

            <InputField
              name="email"
              control={control}
              label="Email"
              type="text"
              errors={errors}
            />

            <InputField
              name="password"
              control={control}
              label="Password"
              type="password"
              errors={errors}
            />
          </div>
          <div className="w-full">
            <MuiButton
              variant="contained"
              type="submit"
              title={"Sign Up"}
              size={"small"}
            />
          </div>
        </CardTemplate>
      </form>
    </div>
  );
};

export default SignUpMian;

import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../shared/InputField/UI/InputField";
import SignUpValidation from "../helper/validation/validation";
import CardTemplate from "../../shared/CardWrapper/UI/CardTemplate";
import MuiButton from "../../shared/Button/UI/MuiButton";
import PasswordField from "../../shared/PasswordInput/view/PasswordInputView";

const SignUpFormUI = ({
  onSubmit,
  control,
  handleSubmit,
  errors,
  ...props
}) => {
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full md:w-[24rem] flex-col gap-8">
          <p className="w-full text-center">Sign Up</p>
          <div className="flex  flex-col gap-10">
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

            <PasswordField
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
          <div className="w-full text-center">
            <p>
              Already have an account:{" "}
              <span
                onClick={() => props.navigate("/login")}
                className="text-green-900 cursor-pointer "
              >
                Login
              </span>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpFormUI;

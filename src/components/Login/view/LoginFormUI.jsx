import React from "react";
import MuiButton from "../../shared/Button/UI/MuiButton";
import CardTemplate from "../../shared/CardWrapper/UI/CardTemplate";
import InputField from "../../shared/InputField/UI/InputField";
import PasswordField from "../../shared/PasswordInput/view/PasswordInputView";

const LoginFormUI = ({ onSubmit, control, handleSubmit, errors, ...props }) => {
  return (
    <div className="w-full flex justify-center items-center  ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-8">
          <div className="flex w-full md:w-[24rem]   flex-col gap-10">
            <p className="w-full text-center">Login</p>
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
              title={"LogIn"}
              size={"small"}
            />
          </div>
          <div className="w-full text-center">
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => props.navigate("/signup")}
                className="text-green-900 cursor-pointer "
              >
                SignUp
              </span>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginFormUI;

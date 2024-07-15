import React from "react";
import MuiButton from "../../shared/Button/UI/MuiButton";
import CardTemplate from "../../shared/CardWrapper/UI/CardTemplate";
import InputField from "../../shared/InputField/UI/InputField";

const LoginUI = ({ onSubmit, control, handleSubmit, errors }) => {
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardTemplate>
          <div className="flex  flex-col gap-4">
            <p className="w-full text-center">Login</p>
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
              title={"LogIn"}
              size={"small"}
            />
          </div>
        </CardTemplate>
      </form>
    </div>
  );
};

export default LoginUI;

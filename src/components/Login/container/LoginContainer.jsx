import React, { useContext } from "react";
import { UseDArkTheme } from "../../DarkTheme/Context/ThemeContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import LoginValidtion from "../Helper/validation/LoginValidtion";
import { SetBackendValidation } from "../../shared/validation/BackendValidtion/CustomValidation";
import { useLoginUserMutation } from "../../../redux/Slice/user/userSlice.jsx";
import { useNavigate } from "react-router-dom";
import LoginFormUI from "../view/LoginFormUI.jsx";
import LoginUI from "../view/LoginUI.jsx";
import { useGlobalState } from "../../Global/context/GlobalStateProvider.jsx";

const LoginContainer = () => {
  const [LoginUser, { isLoading }] = useLoginUserMutation();
  const { darkMode, toggleTheme } = UseDArkTheme();
  const {  isLoggedIn, setisLoggedIn } =
  useGlobalState();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(LoginValidtion()),
  });
  const onSubmit = async (formData) => {
    try {
      console.log(formData);
      const { error, data } = await LoginUser(formData);
      console.log(data, "responseeeeeeeeee");
      console.log(error, "error");

      if (error) {
        error.data?.errorName === "emailError"
          ? SetBackendValidation(setError, "email", error.data.message)
          : error.data?.errorName === "passwordError"
          ? SetBackendValidation(setError, "password", error.data.message)
          : null;
      }
      if (data?.success) {
        localStorage.setItem("user_email", data.data?.email);
        localStorage.setItem("user_id", data.data?._id);
        localStorage.setItem("user_name", data.data?.userName);
        setisLoggedIn(true)
        navigate("/");
      }
      console.log(isLoading, "isLoading");
    } catch (error) {
      console.log(error, "errrror");
    }

    // Perform form submission logic here
  };
  return (
    <div>
      <LoginUI
        onSubmit={onSubmit}
        control={control}
        handleSubmit={handleSubmit}
        errors={errors}
        navigate={navigate}
      />
    </div>
  );
};

export default LoginContainer;

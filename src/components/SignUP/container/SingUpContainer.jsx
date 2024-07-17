import React, { useContext } from "react";
import axios from "axios";
import { baseUrl } from "../../../BaseURl/BaseUrl";
import { UseDArkTheme } from "../../DarkTheme/Context/ThemeContext";
import SignUpValidation from "../helper/validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SetBackendValidation } from "../helper/BackendValidation/SetBackendValidation";
import { useRegisterUserMutation } from "../../../redux/Slice/user/userSlice";
import { useNavigate } from "react-router-dom";
import SignUpUI from "../UI/SignUpUI";

const SingUpContainer = () => {
  const [RegisterUser, { isLoading }] = useRegisterUserMutation();
  const { darkMode, toggleTheme } = UseDArkTheme();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(SignUpValidation()),
  });
  console.log(darkMode);
  const onSubmit = async (formData) => {
    try {
      console.log(formData);
      // const response = await axios.post(`${baseUrl}/register`, data);
      const { error, data } = await RegisterUser(formData);
      console.log(data, "responseeeeeeeeee");

      if (error) {
        error.data?.errorName === "emailError"
          ? SetBackendValidation(setError, "email", error.data.message)
          : null;
      }
      if (data?.success) {
        navigate("/login");
      }
      console.log(isLoading, "isLoading");
    } catch (error) {
      console.log(error, "errrror");
    }

    // Perform form submission logic here
  };
  return (
    <div>
      <SignUpUI
        onSubmit={onSubmit}
        control={control}
        handleSubmit={handleSubmit}
        errors={errors}
        navigate={navigate}
      />
    </div>
  );
};

export default SingUpContainer;

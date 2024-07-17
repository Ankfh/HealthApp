import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PersonaldetailsValidation from "../validation/PersonalPagesValidation";
import PersonalDetailView from "../view/PersonalDetailView";
import CountryList from "../services/CountryList";

const PersonalDetailContainer = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(PersonaldetailsValidation()),
  });
  const onSubmit = async (formData) => {
    try {
        console.log(formData,'ma hardio loan')
    } catch (error) {
      console.log(error, "errrror");
    }

    // Perform form submission logic here
  };
  return (
    <>
      <PersonalDetailView
        onSubmit={onSubmit}
        control={control}
        handleSubmit={handleSubmit}
        errors={errors}
        navigate={navigate}
        countryList={CountryList()}
      />
    </>
  );
};

export default PersonalDetailContainer;

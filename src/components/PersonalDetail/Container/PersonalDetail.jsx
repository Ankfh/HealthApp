import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PersonaldetailsValidation from "../validation/PersonalPagesValidation";
import PersonalDetailView from "../view/PersonalDetailView";
import CountryList from "../services/CountryList";
import { useAddUserDetailMutation } from "../../../redux/Slice/user/userSlice";

const PersonalDetailContainer = () => {
  const [AddUserDetail, { isLoading }] = useAddUserDetailMutation();
  const navigate = useNavigate();
  const [renderNo, setrenderNo] = useState(1);
  const validation = PersonaldetailsValidation(renderNo);
  const maxSteps = 4;
  const handleNext = () => {
    setrenderNo((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setrenderNo((prev) => Math.max(prev - 1, 1));
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(validation),
  });
  const onSubmit = async (formData) => {
    try {
      if (renderNo === 4) {
        const userid = localStorage.getItem("_id");
        formData = { ...formData, userId: userid };
        const { error, data } = await AddUserDetail(formData);
        console.log(formData, "inside_submit");
        console.log(data, "idata");
        navigate("/appointment");
      } else {
        handleNext();
        console.log(formData, "ma hardio loan");
      }
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
        renderNo={renderNo}
        maxSteps={maxSteps}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </>
  );
};

export default PersonalDetailContainer;

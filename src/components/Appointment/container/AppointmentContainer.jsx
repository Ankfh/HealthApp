import React, { useState } from "react";
import AppointmentView from "../view/AppointmentView";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAddAppointmentMutation } from "../../../redux/Slice/Appointment/AppointmentSlice";
import Notification from "../../shared/Notification/view/Notification";
const schema = yup.object({
  date: yup.date().required("Date is required"),
});
const AppointmentContainer = () => {
  const [addAppointment, { isLoading: isAdding }] = useAddAppointmentMutation();
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (formData) => {
    try {
        const userid = localStorage.getItem("_id");
        formData = { ...formData, userId: userid };
      await addAppointment(formData).unwrap();
      setNotification({
        open: true,
        message: "Appointment added successfully!",
        severity: "success",
      });
    } catch (error) {
      console.log(error, "errin appointment");
      setNotification({
        open: true,
        message: `Failed to add appointment: ${error.message}`,
        severity: "error",
      });
    }
  };
  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };
  return (
    <>
      <AppointmentView
        onSubmit={onSubmit}
        control={control}
        handleSubmit={handleSubmit}
        errors={errors}
        navigate={navigate}
      />
      <Notification
        open={notification.open}
        message={notification.message}
        severity={notification.severity}
        onClose={handleClose}
      />
    </>
  );
};

export default AppointmentContainer;

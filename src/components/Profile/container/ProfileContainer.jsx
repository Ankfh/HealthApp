import React from "react";
import { useGetAppointmentByIdQuery } from "../../../redux/Slice/Appointment/AppointmentSlice";
import ProfileView from "../view/ProfileView";

const ProfileContainer = () => {
  const userid = localStorage.getItem("user_id");
  const { data, error, isLoading } = useGetAppointmentByIdQuery(userid);
  console.log(data?.data?.userDetailId?.gender, "appointment data");
  const fullName = `${data?.data?.userDetailId?.firstName} ${data?.data?.userDetailId?.lastName}`;
  return (
    <>
      <ProfileView
        appointmentDate={data?.data?.appointmentDate}
        userName={data?.data?.userDetailId?.firstName}
        status={data?.data?.status}
        fullName={fullName}
        age={data?.data?.userDetailId?.age}
        gender={data?.data?.userDetailId?.gender}
        city={data?.data?.userDetailId?.city}
      />
    </>
  );
};

export default ProfileContainer;

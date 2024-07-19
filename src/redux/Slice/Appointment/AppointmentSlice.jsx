import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../BaseURl/BaseUrl";

import { createAppointment } from "../../../components/Appointment/Api/AppointmentApi";

const baseQuery = fetchBaseQuery({ baseUrl: `${baseUrl}/appointment` });

export const appointmentSlice = createApi({
  reducerPath: "appointmentApi",
  baseQuery,
  tagTypes: ["Appointment"],
  endpoints: (builder) => ({
    addAppointment: builder.mutation({
      query: createAppointment,
      invalidatesTags: ["Appointment"],
    }),
    // getAllAppointments: builder.query({
    //   query: () => "",
    //   providesTags: ["Appointment"],
    //   refetchOnMountOrArgChange: true,
    // }),
    // getAppointmentById: builder.query({
    //   query: (id) => `/${id}`,
    //   providesTags: ["Appointment"],
    //   refetchOnMountOrArgChange: true,
    // }),
  }),
});

export const {
  useAddAppointmentMutation,
  //   useGetAllAppointmentsQuery,
  //   useGetAppointmentByIdQuery
} = appointmentSlice;

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slice/user/userSlice";
import { userDetailSlice } from "./Slice/product/UserDetailSlice";
import { appointmentSlice } from "./Slice/Appointment/AppointmentSlice";
export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [userDetailSlice.reducerPath]: userDetailSlice.reducer,
    [appointmentSlice.reducerPath]: appointmentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userSlice.middleware,
      userDetailSlice.middleware,
      appointmentSlice.middleware
    ),
});

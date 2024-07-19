import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl } from "../../../BaseURl/BaseUrl";
import { addUserDetail } from "../../../components/PersonalDetail/api/UserDetailsApis";

const baseQuery = fetchBaseQuery({ baseUrl: ` ${baseUrl}/product` });

export const userDetailSlice = createApi({
  reducerPath: "userDetailApi",
  baseQuery,
  tagTypes: ["userDetail"],
  endpoints: (builder) => ({
    AddUserDetail: builder.mutation({
      query: addUserDetail,
      invalidatesTags: ["userDetail"],
    }),
    GetAllUserDetail: builder.query({
      query: "",
      providesTags: ["userDetail"],
      refetchOnMountOrArgChange: true,
    }),
  }),
});

export const { useAddUserDetailMutation, useGetAllUserDetailQuery } = userDetailSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl } from "../../../BaseURl/BaseUrl";

const baseQuery = fetchBaseQuery({ baseUrl: ` ${baseUrl}/product` });

export const productSlice = createApi({
  reducerPath: "productApi",
  baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    AddProduct: builder.mutation({
      query: "",
      invalidatesTags: ["Product"],
    }),
    GetAllProducts: builder.query({
      query: "",
      providesTags: ["Product"],
      refetchOnMountOrArgChange: true,
    }),
  }),
});

export const { useAddProductMutation, useGetAllProductsQuery } = productSlice;

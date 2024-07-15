const CustomEndPoint =
  (url, method, invalidatesTags = []) =>
  (builder) => {
    return builder.mutation({
      query: (data) => ({
        url: url,
        method: method,
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags,
    });
  };

export default CustomEndPoint;

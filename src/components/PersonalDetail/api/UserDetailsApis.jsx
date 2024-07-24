export const addUserDetail = (data) => ({
  url: "/detail",
  method: "POST",
  body: { data },
});

export const getUserDetails = (id) => ({
  url: `/getdetail/${id}`,
  method: "GET",
});

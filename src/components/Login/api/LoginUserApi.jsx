export const LoginUserApi = (data) => ({
  url: "/login",
  method: "POST",
  body: { data },
});


export const getUser = (id) => (
  console.log(id,'id '),
  {
  url: `/get/${id}`,
  method: "GET",
});

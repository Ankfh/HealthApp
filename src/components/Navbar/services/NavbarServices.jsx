export const oNlogoutClick = (navigate) => {
  localStorage.removeItem("user_email");
  localStorage.removeItem("user_id");
  localStorage.removeItem("user_name");
  navigate("/login");
};

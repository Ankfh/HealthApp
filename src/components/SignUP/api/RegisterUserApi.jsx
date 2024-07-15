import React from "react";

export const RegisterUserApi = (data) => ({
  url: "/register",
  method: "POST",
  body: { data },
});

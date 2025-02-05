import React from "react";
import LoginFormUI from "./LoginFormUI";
import pic from "../../../assets/Rectangle 33.png";
const LoginUI = (props) => {
  return (
    <div className="flex w-full  justify-center gap-40  h-screen  items-center">
      <div className="pl-4 ">
        <LoginFormUI {...props} />
      </div>
      <div className="hidden md:block">
        <img  width={400} height={100} src={pic} alt="" />
      </div>
    </div>
  );
};

export default LoginUI;

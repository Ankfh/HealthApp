import React from "react";
import pic from "../../../assets/Rectangle 33.png";
import SignUpFormUI from "./SignUpFormUI";
const SignUpUI = (props) => {
  return (
    <div className="flex w-full  justify-center gap-40  h-screen  items-center">
      <div className="p-4 ">
        <SignUpFormUI {...props} />
      </div>
      <div className="hidden md:block">
        <img width={400} height={100} src={pic} alt="" />
      </div>
    </div>
  );
};

export default SignUpUI;

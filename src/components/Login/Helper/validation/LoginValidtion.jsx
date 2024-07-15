import * as yup from "yup";

const LoginValidtion = () => {
  return yup.object().shape({
    email: yup.string().required("Enter your email"),
    password: yup.string().required("Enter your password"),
  });
};

export default LoginValidtion;

import * as yup from "yup";

const SignUpValidation = () => {
  return yup.object().shape({
    name: yup.string().required("Enter your name"),
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Enter your email"),
    password: yup.string().required("Enter your password"),
  });
};

export default SignUpValidation;

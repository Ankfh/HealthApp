import * as yup from "yup";

const PersonaldetailsValidation = () => {
  return yup.object().shape({
    name: yup.string(),
  });
};

export default PersonaldetailsValidation;

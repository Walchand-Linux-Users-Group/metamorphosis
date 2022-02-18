import _ from "lodash";
import * as yup from "yup";
import validations from "../../../utils/validations";

const formValidations = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(validations.email, "Please enter a valid email address."),
  name: yup.string().required("Name is required"),
  college: yup.string().required("College name is required"),
  year: yup.string().required("Year is required"),
  branch: yup.string().required("Branch name is required"),
  mobile_number: yup
    .string()
    .required("Mobile number is required")
    .test(
      "phoneNumberRequired-test",
      "Please enter a valid mobile number",
      async (value = "") => {
        if (value?.slice(0, 3).toString() === "+91") {
          if (
            validations.indian_phone_number.test(value) &&
            value?.length === 13
          ) {
            return true;
          } else {
            return false;
          }
        }
        if (validations.indian_phone_number.test(value)) {
          return true;
        } else {
          return false;
        }
      }
    ),
});

export { formValidations };

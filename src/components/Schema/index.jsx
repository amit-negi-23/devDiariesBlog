import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(20, "Name must be at most 20 characters long")
    .matches(
      /^[A-Za-z\s]+$/,
      "Name must contain only alphabetic characters and spaces"
    )
    .required("Please enter your name"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    // .email("Please enter a valid email address")
    .required("Please enter your email"),
  password: Yup.string()
  .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long"
  ),

//   password: Yup.string()
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,
//       "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//     )
//     .min(6, "Password must be at least 6 characters")
//     .required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

import * as Yup from "yup";

export const signUpSchema = Yup.object({
    Name: Yup.string()
        .min(3, "Name must be at least 3 characters long")
        .max(20, "Name must be at most 20 characters long")
        .matches(
            /^[A-Za-z\s]+$/,
            "Name must contain only alphabetic characters and spaces"
        )
        .required("Please enter your name"),
        Email: Yup.string().email().required("Please enter your email"),
        Password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long"
        )
        .required("Please enter your password"),
        ConfirmPassword: Yup.string().required().oneOf([Yup.ref("Password"), null], "Passwords must match"),
});
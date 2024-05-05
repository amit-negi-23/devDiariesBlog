import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from 'formik';
import { signUpSchema } from "../Schema";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import "./register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: function (values, action) {
      console.log("Values: ", values)
      action.resetForm()
    }
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <NavBar />
      <div className="container text-center form-container">
        <h1 className="heading"> Let's join DevDiaries</h1>
        <p className="text-center w-50 p-3 mx-auto">
          Lorem Ipsum is simply dummy dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown
        </p>

        <form className="container form " onSubmit={formik.handleSubmit}>
          <div className="contactus">
            <h4>Contact Us</h4>
          </div>

    <div>
          <label htmlFor="Name">Name</label>
          <input
            type='text'
            className="border  w-100 p-2 "
            id="Name"
            name="Name"
            placeholder="Enter your Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          {formik.errors.Name && formik.touched.Name ? (<p>{formik.errors.Name}</p>) : null}

          <label htmlFor="Email">Email address</label>

          <input
            type="email"
            className="border  w-100 p-2 "
            id="Email"
            name="Email"
            placeholder="Enter your email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.Email && formik.touched.Email ? (<p>{formik.errors.Email}</p>) : null}

          <label htmlFor="Password">Password</label>
          <div className="position-relative">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              className="border  w-100 p-2  "
              id="Password"
              name="Password"
              placeholder="Enter your password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="eye-position"
              onClick={togglePasswordVisibility}
            />
            {formik.errors.Password && formik.touched.Password ? (<p>{formik.errors.Password}</p>) : null}
          </div>
          <label htmlFor="ConfirmPassword">Confirm Password</label>

          <input
            type="password"
            className="border  w-100 p-2 "
            id="ConfirmPassword"
            name="ConfirmPassword"
            placeholder="Confirm your password"
            value={formik.values.ConfirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.ConfirmPassword && formik.touched.ConfirmPassword ? (<p>{formik.errors.ConfirmPassword}</p>) : null}

          <button type="submit" className="btn btn-primary button">
            Register
          </button>
          <div className="para">
            <p>
              {" "}
              Do you already have an account??{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login Now
              </Link>
            </p>
          </div>
        </form>

      </div>

      <Footer />
    </>
  );
}

export default Register;

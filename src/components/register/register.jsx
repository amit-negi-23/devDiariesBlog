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
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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
          <label htmlFor="name">Name</label>
          <input
            type='text'
            className="border  w-100 p-2 "
            id="name"
            name="name"
            placeholder="Enter your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          {formik.errors.name && formik.touched.name ? (<p className="form-error">{formik.errors.name}</p>) : null}

          <label htmlFor="email">Email address</label>

          <input
            type="email"
            className="border  w-100 p-2 "
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (<p className="form-error">{formik.errors.email}</p>) : null}

          <label htmlFor="password">Password</label>
          <div className="position-relative">
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              className="border  w-100 p-2  "
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="eye-position"
              onClick={togglePasswordVisibility}
            />
            {formik.errors.password && formik.touched.password ? (<p className="form-error">{formik.errors.password}</p>) : null}
          </div>
          <label htmlFor="confirmPassword">Confirm Password</label>

          <input
            type="password"
            className="border  w-100 p-2 "
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (<p className="form-error">{formik.errors.confirmPassword}</p>) : null}

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

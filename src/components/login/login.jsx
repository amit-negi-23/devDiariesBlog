import NavBar from "../common/navBar/navBar";
import Footer from "../common/footer/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from 'formik';
import { signUpSchema } from "../Schema";
import "./login.css";

function LogIn() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    Email: "",
    Password: ""
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
      <div className="container  login-page">

        <div className="left">
          <h1>this is left side with width 60%</h1>
        </div>
       
      
        <div className="login">
          <form onSubmit={formik.handleSubmit}>  
            <h1 className="text-center mb-5">Login</h1>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email address
              </label>
             
              <input
                type="email"
                className="border d-block w-100 p-2"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                value={formik.values.Email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.Email && formik.touched.Email ? (<p>{formik.errors.Email}</p>) : null}

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <div className=" position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="border  w-100 p-2 d-flex mb-0"
                  id="Password"
                  placeholder="Enter your password"
                  value={formik.values.Password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash }
            className="eye-position"
            onClick={togglePasswordVisibility}
          />
                
              </div>
              {formik.errors.Password && formik.touched.Password ? (<p>{formik.errors.Password}</p>) : null}
            </div>
            <div className="mb-3 form-check">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me?
                </label>
                <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
                  Forgot Password
                </Link>
              </div>
            </div>
            <button type="submit" className="btn btn-submit">
              Login
            </button>
            <div className="para">
              <p>
                Don't have an account?{" "}
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      

      <Footer />
    </>
  );
}

export default LogIn;

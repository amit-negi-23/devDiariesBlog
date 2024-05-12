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
  const [showpassword, setShowpassword] = useState(false);

  const initialValues = {
    email: "",
    password: ""
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: function (values, action) {
      console.log("Values: ", values)
      action.resetForm()
    }
  });

  const togglepasswordVisibility = () => {
    setShowpassword(!showpassword);
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
              <label htmlFor="email" className="form-label">
                email address
              </label>
             
              <input
                type="email"
                className="border d-block w-100 p-2"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.email && formik.touched.email ? (<p>{formik.errors.email}</p>) : null}

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                password
              </label>
              <div className=" position-relative">
                <input
                  type={showpassword ? "text" : "password"}
                  className="border  w-100 p-2 d-flex mb-0"
                  id="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FontAwesomeIcon
            icon={showpassword ? faEye : faEyeSlash }
            className="eye-position"
            onClick={togglepasswordVisibility}
          />
                
              </div>
              {formik.errors.password && formik.touched.password ? (<p>{formik.errors.password}</p>) : null}
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
                <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                  Forgot password
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

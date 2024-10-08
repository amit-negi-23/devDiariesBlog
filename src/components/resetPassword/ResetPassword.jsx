// import Footer from "../common/footer/footer";
// import NavBar from "../common/navBar/navBar";
import { Link } from "react-router-dom";
import "./ResetPassword.css";
import {  ResetSchema } from "../../Schema/resetPassSchema";
import { useFormik } from "formik";

function ResetPassword() {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ResetSchema,
    onSubmit: function (values, action) {
      // await newUser(values);
      action.resetForm();
    },
  });
  return (
    <>
      {/* <NavBar /> */}
      <div className="row py-lg-5 pt-3 pb-2 ms-0 w-100">
        <div className="col-lg-7 col-sm-12 my-4 px-2">
          <h1 className="fw-bolder ps-lg-5 ps-0 text-black">
            Enter your new password to update the old password
          </h1>

          <p className="p-5 pe-4 mt-5 text-secondary d-none d-lg-block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            cumque suscipit rem nisi impedit rerum ad. Sed voluptatem tempora
            delectus unde modi harum nesciunt rerum labore ratione? Ex maiores,
            tempore officia ea tenetur
          </p>
        </div>
        <div className="custom col-lg-5 col-sm-12 my-4 px-1">
          <form
            className=" form-container border border-dark p-lg-5 px-3 py-4 mx-3"
            onSubmit={formik.handleSubmit}
          >
            <h1 className="heading ps-2 text-center">DevDiaries</h1>
            <div className="mb-3">
              {" "}
              <label for="password">Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "border border-danger register_input  w-100 p-2 "
                    : " border register_input  w-100 p-2"
                }
                id="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.password && formik.touched.password ? (
              <p className="form-error mt-0">{formik.errors.password}</p>
            ) : null}
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className={
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "border border-danger register_input  w-100 p-2 "
                  : " border register_input  w-100 p-2"
              }
              id="confirmPassword"
              placeholder="Confirm your password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <p className="form-error mt-0">{formik.errors.confirmPassword}</p>
            ) : null}

            <button type="submit" className="btn btn-primary button mt-3">
              Submit
            </button>
            <div className="para pt-3">
              <p>
                {" "}
                Do you already have an account??{" "}
                <Link to="/login" className="text-decoration-none d-lg-inline d-block">
                  Login Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default ResetPassword;

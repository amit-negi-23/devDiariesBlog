import { Link } from "react-router-dom";
import "./UpdatePassword.css";
import { UpdateSchema } from "../../Schema/updatePassSchema";
import { useFormik } from "formik";

function UpdatePassword() {
  const initialValues = {
    currentPassword: "",
    password: "",
    confirmPassword: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: UpdateSchema,
    onSubmit: function (values, action) {
      // await  newUser(values);
      action.resetForm();
    },
  });
  return (
    <>
      <div className="row py-lg-5 pt-3 pb-2">
        <div className="col-lg-6 col-sm-12 p-lg-5 px-3 py-4 text-center mt-lg-5 mt-0">
          <h1 className="fw-bolder px-5  mx-5 text-black">
            Enter your new password to update the old password
          </h1>

          <p className="px-5 mt-5 mx-5 text-secondary d-none d-lg-block">
            "Please enter your new password to update your old one. Make sure
            it's at least 8 characters long, includes a mix of letters, numbers,
            and symbols for better security."
          </p>
        </div>
        <div className="col-lg-4 col-sm-12">
          <form
            className="container upass-form-container border rounded  px-lg-5 py-lg-4 p-3"
            onSubmit={formik.handleSubmit}
          >
            {/* <h1 className="heading ps-2 text-center">DevDiaries</h1> */}
            <i className="fa-solid fa-key mb-5 text-center key-icon"></i>
            <div className="">
              <label for="currentPassword">Current Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className={
                  formik.errors.currentPassword && formik.touched.currentPassword
                    ? "border border-danger update_input  w-100 p-2 "
                    : " border update_input  w-100 p-2"
                }
                id="currentPassword"
                placeholder="Enter your password"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.currentPassword &&
              formik.touched.currentPassword ? (
                <p className="form-error mt-0">
                  {formik.errors.currentPassword}
                </p>
              ) : null}
            </div>
            <div className="">
              <label for="password">New Password</label>
              <input
                type="password"
                autoComplete="new-password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "border border-danger update_input  w-100 p-2 "
                    : " border update_input  w-100 p-2"
                }
                id="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <p className="form-error mt-0">{formik.errors.password}</p>
              ) : null}
            </div>
            <div className="">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className={
                  formik.errors.confirmPassword && formik.touched.confirmPassword
                    ? "border border-danger update_input  w-100 p-2 "
                    : " border update_input  w-100 p-2"
                }
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <p className="form-error mt-0">
                  {formik.errors.confirmPassword}
                </p>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary button mt-4">
              Submit
            </button>
            <div className="para pt-3">
              <p>
                {" "}
                Do you already have an account?{" "}
                <Link to="/login" className="text-decoration-none d-block d-lg-inline">
                  Login Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default UpdatePassword;

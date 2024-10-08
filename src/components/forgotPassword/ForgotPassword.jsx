import NavBar from "../common/navBar/NavBar";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <>
      <NavBar />
      <div className="row pt-5">
        <div className="col-lg-6 col-sm-12 mt-lg-5 text-center py-lg-5 pt-5 py-3 mx-lg-5">
          <h1 className="fw-bold px-lg-5 pt-lg-5 mx-lg-5">You forgot your password?</h1>
          <p className="fs-3 fw-bold text-muted mt-lg-5 mt-3">
            Calm down we will help you !!
          </p>
          <p className=" px-5 mt-4 text-secondary mx-5 d-none d-lg-block">
            No worries! Please enter your email address, and we'll send you
            instructions to reset your password.
          </p>
        </div>
        <div className="col-lg-4 col-sm-12 my-lg-5 mt-2 mb-5 px-1">
          <form className=" fpass-form-container border border-muted px-lg-5 px-4 py-4 mx-lg-5">
            <i className="fa-solid fa-lock fs-1 mb-5 text-primary text-center lock-icon"></i>
            <h3 className="text-center">Trouble logging in?</h3>
            <p className="text-muted text-center">
              Enter your email and we'll send you a link to get back into your
              account.
            </p>
            <div className="mb-3">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                autoComplete="new-password"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" className="btn btn-primary reset-button">
              Reset Password
            </button>
            <div className="para pt-3">
              <p>
                Do you already have an account??{" "}
                <Link to="/login" className="text-decoration-none d-block d-lg-inline">
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
export default ForgotPassword;

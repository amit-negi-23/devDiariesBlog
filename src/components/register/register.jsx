import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import "./register.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <NavBar />
      <div className="container text-center form-container">
        <h1 className="heading"> Let's join Dev Diaries</h1>
        <p className="text-center w-50 p-3 mx-auto">
          Lorem Ipsum is simply dummy dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown
        </p>

        <form className="container form ">
          <div className="contactus">
            <h4>Contact Us</h4>
          </div>

          <label for="">Name</label>
          <input
            type={showPassword ? "text" : "password"}
            className="border  w-100 p-2 "
            id="Name"
            placeholder="Enter your Name"
          />
          <label for="exampleInputEmail1">Email address</label>

          <input
            type="email"
            className="border  w-100 p-2 "
            id="exampleInputEmail1"
            placeholder="Enter your email"
          />
          
          <label for="exampleInputPassword1">Password</label>
          <div className="position-relative">
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            className="border  w-100 p-2  "
            id="exampleInputPassword1"
            placeholder="Enter your password"
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash }
            className="eye-position"
            onClick={togglePasswordVisibility}
          />
          </div>
          <label for="exampleInputPassword1">Confirm Password</label>

          <input
            type="password"
            className="border  w-100 p-2 "
            id="ConfirmPassword"
            placeholder="Confirm your password"
          />

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

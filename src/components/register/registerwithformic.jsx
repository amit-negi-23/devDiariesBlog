import { Formik, useFormik } from "formik";
import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";
import "./register.css";

function Registerwithformic() {
  const initialvalue = {
    name: "",
    email: "",
    password: "",
    confirm_Password: "",
  };
  const {values, errors, handleBlur, handleChange , handleSubmit  } = useFormik({
    initialValues: initialvalue,
    onSubmit : (values) => {
        console.log(values);
    }
  });

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

        <form onSubmit = {handleSubmit} className="container form ">
          <div className="contactus">
            <h4>Contact Us</h4>
          </div>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="email">Email address</label>

          <input
            type="email"
            autoComplete="off"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirm_Password"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button type="submit" className="btn btn-primary button">
            Register
          </button>
          <div className="para">
            <p>
              {" "}
              Do you already have an account?? <a href="#">Login Now</a>
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Registerwithformic;

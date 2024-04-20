import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";
import "./register.css";

function Register() {
  return (
    <>
    <NavBar/>
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
            type="text"
            className="form-control"
            id="Name"
            placeholder="Enter your Name"
          />
          <label for="exampleInputEmail1">Email address</label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your email"
          />

          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            
            autoComplete="new-password"
            className="form-control"
            id="exampleInputPassword1"
            
            placeholder="Enter your password"
            
          />
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="ConfirmPassword"
            placeholder="Confirm your password"
          />

          <button type="submit" className="btn btn-primary button">
            Register
          </button>
          <div className="para">
          <p> Do you already have an account?? <a href="#">Login Now</a></p>
          </div>
        </form>
      </div>

       <Footer />
    </>
  );
}
export default Register;

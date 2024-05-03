import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";
import "./forgotPassword.css";

function ForgotPassword() {
  return (
    <>
      <NavBar />
      <div class="d-flex flex-row p-4 py-5">
        <div class="container p-2 me-5">
          <h1 className="fw-bolder ps-5 text-black">
            You forgot your password? calm down we will help
          </h1>

          <p className="p-5 pe-4 mt-5 text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            cumque suscipit rem nisi impedit rerum ad. Sed voluptatem tempora
            delectus unde modi harum nesciunt rerum labore ratione? Ex maiores,
            tempore officia ea tenetur
          </p>
        </div>
        <div class="container p-2 mx-5">
          <form className=" form-container border border-dark p-5 mx-5">
            <h1 className="heading ps-2 text-center">Dev Diaries</h1>
            <div className="mb-3">
              {" "}
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                autoComplete="new-password"
                className="form-control "
                id="exampleInputPassword1"
                placeholder="Enter your email"
              />
            </div>

            <button type="submit" className="btn btn-primary button">
              Reset Password
            </button>
            <div className="para pt-3">
              <p>
                {" "}
                Do you already have an account??{" "}
                <a href="#" className="text-decoration-none">
                  Login Now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ForgotPassword;

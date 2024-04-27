import NavBar from "../common/navBar/navBar";
import Footer from "../common/footer/footer";
import './login.css'

function LogIn() {
  return (
    <>
      <NavBar />
      <div className="container d-flex">
    <div className="left" >
        <h1>this is left side with width 60%</h1>
    </div>
    
    <div className="login">
    <form>
        <h1 className="text-center mb-5">Login</h1>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
            
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
        </div>
        <div className="mb-3 form-check  ">
            <div>
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Remember me?</label><span>Forgot Password</span>
            </div>
            
        </div>
        <button type="submit" className="btn btn-submit">Login</button>
        <div className="para">
          <p> Don't have an account? <a href="#">Register here</a></p>
          </div>
    </form>
</div>

</div>

      <Footer />
    </>
  );
}
export default LogIn;

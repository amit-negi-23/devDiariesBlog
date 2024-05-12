import "./navbar.css";
import { Link } from "react-router-dom";
import search from "../../../assets/images/search-icon.png";

function NavBar() {
  return (
<nav className="navbar navbar-expand-lg">
  <div className="container">
  <button
  // added bg-white to set background color to white
  className="navbar-toggler border-0 bg-white" 
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarText"
  aria-controls="navbarText"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span> 
   
</button>
    <Link className="navbar-brand text-white d-none d-lg-block" to="#">
      DevDiaries
    </Link>
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarText"
    >
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" to="/sport">
            Sport
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/health">
            Health
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/political">
            Political
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/business">
            Business
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/finance">
            Finance
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/life">
            Life
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/entertainment">
            Entertainment
          </Link>
        </li>
      </ul>
    </div>
    <div className="d-flex align-items-center ms-auto d-block">
      <span className="text-white mx-2 fw-light ">|</span>
      <Link
        className="text-white mx-2 fw-light text-decoration-none fs-6"
        to="/login"
      >
        Login
      </Link>
      <Link
        className="text-white mx-2 fw-light text-decoration-none fs-6"
        to="/register"
      >
        Register
      </Link>
    </div>
  </div>
</nav>

  );
}

export default NavBar;

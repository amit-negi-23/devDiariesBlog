import "./NotFound.css"
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div class="container text-center d-flex justify-content-center align-items-center vh-100">
    <div class="notfound-content">
      <h1 class="display-1 fw-bold">404</h1>
      <p class="fs-2"> <span class="text-neon">Oops!</span> Page not found.</p>
      <p class="lead mb-4">The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" class="btn btn-neon btn-lg rounded-pill shadow-lg">Go Back Home</Link>
    </div>
  </div>
    </>
  );
}
export default NotFound;

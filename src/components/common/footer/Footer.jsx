import './Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  // console.log('footer is called')
  return (
    <>
      <div className="footer">
        <div className="container ">
          <footer className="py-2">
            <div className="row ">
              <div className="col-md-12 col-lg-5  mb-3">
                <h5 className="text-white">DevDiaries</h5>
                <p className="text-white text-opacity-50 text">
                Coding the future, one line at a time. Stay connected with us as we grow, learn, and build together. Have feedback or want to collaborate? <Link to="/">Contact us</Link>.
                </p>
              </div>
              <div
                className="col col-lg-1 mb-3"
                style={{
                  fontSize: "1rem",
                  lineHeight: "2",
                }}
              >
                <h5 style={{ marginBottom: "22px", color: "white" }}>World</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Politics
                    </Link>
                  </li>
                  
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Tech
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Entertainment
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-1 mb-3 footer-column">
                <h5 className="text-white mb-4">Tech</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Magazine
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      StartUp
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Crypto
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="col col-lg-1 mb-3"
                style={{
                  fontSize: "1rem",
                  lineHeight: "2",
                }}
              >
                <h5 style={{ marginBottom: "22px", color: "white" }}>Life</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Movie
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Music
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="col col-lg-1 mb-3"
                style={{
                  fontSize: "1rem",
                  lineHeight: "2",
                }}
              >
                <h5 style={{ marginBottom: "22px", color: "white" }}>
                  Magazine
                </h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Fasion
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Blogger
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      People
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="col col-lg-1 mb-3"
                style={{
                  fontSize: "1rem",
                  lineHeight: "2",
                }}
              >
                <h5 style={{ marginBottom: "22px", color: "white" }}>Other</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/"
                      className="nav-link p-0 text-white text-opacity-75"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-1 my-0 border-top">
              <p className=" text-white ">
                © 2024 DevDiariesBlog. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Footer;

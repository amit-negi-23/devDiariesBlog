import { useAppContext } from "../../contextApi/context";
import pp from './images/profile.png'
import './myBlog.css'

function MyBlog() {
  const {
    store: { user },
  } = useAppContext();
  console.log(user);
  return (
    <>
      {user != null ? (
        <div className="col-10 offset-1">
          <h1>My Blog Page </h1>
          <h3>
            This blog page belong to{" "}
            <i className=" text-danger">@{user.username}</i>
          </h3>
          <div className="container my-3 py-3 border border-1">
            <h4>All Posts</h4>
            <ul className="list-group">
              <li className="list-group-items border border-1 d-flex justify-content-between align-items-center rounded-0 p-3 my-2">
                <div className="start d-flex align-items-center">
                  <div className="thumbnail img-fluid m-2 border border-2 rounded">
                    <img src="" alt="U" />
                  </div>
                  <div className="post-detail">
                    <h6>Post Title</h6>
                    <span>Post Date</span>
                  </div>
                </div>
                <div className="last">
                  <div className="username d-flex gap-1">
                    <h6>Username</h6>
                    <div className="profile_pic broder border-2 rounded-circle">
                      {" "}
                      <img src={pp} alt="U" className="img-fluid" />
                    </div>
                  </div>
                  <div className="stats d-flex gap-0 p-2">
                    <div className="comment">
                      <span className="p-2">4</span>
                      <i class="fa-regular fa-comment"></i>
                    </div>
                    <div className="count">
                      <span className="p-2">3</span>
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-items border border-1 d-flex justify-content-between align-items-center rounded-0 p-3 my-2">
                <div className="start d-flex align-items-center">
                  <div className="thumbnail img-fluid m-2 border border-2 rounded">
                    <img src="" alt="U" />
                  </div>
                  <div className="post-detail">
                    <h6>Post Title</h6>
                    <span>Post Date</span>
                  </div>
                </div>
                <div className="last">
                  <div className="username d-flex gap-1">
                    <h6>Username</h6>
                    <div className="profile_pic broder border-2 rounded-circle">
                      {" "}
                      <img src={pp} alt="U" className="img-fluid" />
                    </div>
                  </div>
                  <div className="stats d-flex gap-0 p-2">
                    <div className="comment">
                      <span className="p-2">4</span>
                      <i class="fa-regular fa-comment"></i>
                    </div>
                    <div className="count">
                      <span className="p-2">3</span>
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-items border border-1 d-flex justify-content-between align-items-center rounded-0 p-3 my-2">
                <div className="start d-flex align-items-center">
                  <div className="thumbnail img-fluid m-2 border border-2 rounded">
                    <img src="" alt="U" />
                  </div>
                  <div className="post-detail">
                    <h6>Post Title</h6>
                    <span>Post Date</span>
                  </div>
                </div>
                <div className="last">
                  <div className="username d-flex gap-1">
                    <h6>Username</h6>
                    <div className="profile_pic broder border-2 rounded-circle">
                      {" "}
                      <img src={pp} alt="U" className="img-fluid" />
                    </div>
                  </div>
                  <div className="stats d-flex gap-0 p-2">
                    <div className="comment">
                      <span className="p-2">4</span>
                      <i class="fa-regular fa-comment"></i>
                    </div>
                    <div className="count">
                      <span className="p-2">3</span>
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default MyBlog;

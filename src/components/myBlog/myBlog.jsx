import { useAppContext } from "../../contextApi/context";

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
          
          <div className="card mt-3 ">
            <div className="card-body">
              <h5 className="card-title text-primary">First Blog</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste laboriosam illum aspernatur voluptates qui placeat voluptatibus doloribus voluptatum harum autem temporibus, ex aliquid pariatur ut modi, voluptate dolor eum!
              </p>
            </div>
          </div>

          <div className="card mt-3">
            <div className></div>
            <div className="card-body">
              <h5 className="card-title text-primary">Second Blog</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod magni qui quaerat minima rerum hic accusamus quisquam asperiores fugiat quo? Perspiciatis fugiat reiciendis ab quae qui cumque illum fuga quasi!
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className></div>
            <div className="card-body">
              <h5 className="card-title text-primary">Third Blog</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod magni qui quaerat minima rerum hic accusamus quisquam asperiores fugiat quo? Perspiciatis fugiat reiciendis ab quae qui cumque illum fuga quasi!
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default MyBlog;

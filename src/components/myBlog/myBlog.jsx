import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navBar";

function MyBlog() {
  return (
    <>
      {/* <NavBar hideLink={"/myblog"} /> */}
      <NavBar />
      <h1>My Blog Page</h1>
      <Footer />
    </>
  );
}
export default MyBlog;

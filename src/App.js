import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MyBlog from "./components/myBlog/MyBlog";
import Register from "./components/register/Register";
import "./App.css";
import NotFound from "./components/notFound/NotFound";
import LogIn from "./components/login/LogIn";
import PrivateRoute from "./components/common/privateRoute/PrivateRoute";
import { AppProvider } from "./contextApi/context";
import BlogDetailPage from "./components/blogDetailPage/BlogDetailPage";
import UpdatePassword from "./components/updatePassword/UpdatePassword";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import BlogPage from "./components/blogsPage/BlogPage";
import { ToastContainer } from "react-toastify";
import UserLayoutPage from "./components/userDashboard/UserLayoutPage";
import CreatePost from "./components/createPost/CreatePost";
import NavBar from "./components/common/navBar/NavBar";
import ResetPassword from "./components/resetPassword/ResetPassword";


function App() {
  return (
    <AppProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/register"
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/updatepassword"
            element={
              <PrivateRoute>
                <UserLayoutPage>
                  <UpdatePassword />
                </UserLayoutPage>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/forgotpassword"
            element={
              <PrivateRoute>
                <ForgotPassword />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/resetpassword"
            element={

              <UserLayoutPage>
                <ResetPassword />
              </UserLayoutPage>

            }
          ></Route>
          <Route
            path="/userpage/:userId"
            element={
              <PrivateRoute>
                <UserLayoutPage>
                  <MyBlog />
                </UserLayoutPage>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/userpage/:userId/post/blogdetailpage"
            element={
              <PrivateRoute>
                <UserLayoutPage>
                  <BlogDetailPage />
                </UserLayoutPage>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/userpage/post/:userId"
            element={
              <PrivateRoute>
                <div>
                  <NavBar />
                  <CreatePost />
                </div>
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/userpage/post/:postId/edit"
            element={
              <PrivateRoute>
                  <NavBar />
                <div>
                  <CreatePost />
                </div>
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/userpage/blogs/:category"
            element={
              <UserLayoutPage>
                <BlogPage isLayout={false} />
              </UserLayoutPage>
            }
          ></Route>
          <Route
            path="blogs/:category"
            element={<BlogPage isLayout={true} />}
          ></Route>

          <Route
            path="/myblog"
            element={
              <PrivateRoute>
                <MyBlog />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/blog/:blogId"
            element={
              <PrivateRoute>
                <BlogDetailPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <LogIn />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

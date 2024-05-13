import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import MyBlog from "./components/myBlog/myBlog";
import Register from "./components/register/register";
import "./App.css";
import NotFound from "./components/notFound/notFound";
import LogIn from "./components/login/login"
import PrivateRoute from "./components/common/privateRoute";
import { AppProvider } from "./contextApi/context";
import BlogDetailPage from "./components/myBlog/blogDetailPage";
import UpdatePassword from "./components/updatePassword/updatePassword";
import ForgotPassword from "./components/forgotPassword/forgotPassword"
import BlogPage from "./components/blogsPage/blogPage";
import { ToastContainer } from "react-toastify";


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
   
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/updatepassword" element={<UpdatePassword />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/:category" element={<BlogPage />}></Route>

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
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import MyBlog from "./components/myBlog/myBlog";
import Register from "./components/register/register";
import "./App.css";
import NotFound from "./components/notFound/notFound";
import PrivateRoute from "./components/common/privateRoute";
import { AppProvider } from "./contextApi/context";
import BlogDetailPage from "./components/myBlog/blogDetailPage";
import UpdatePassword from "./components/updatePassword/updatePassword";
import ForgotPassword from "./components/forgotPassword/forgotPassword"

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/updatepassword" element={<UpdatePassword />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>

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
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

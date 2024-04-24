import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import MyBlog from "./components/myBlog/myBlog";
import Register from "./components/register/register";
import "./App.css";
import NotFound from "./components/notFound/notFound";
import PrivateRoute from "./components/common/privateRoute";
import { AppProvider } from "./contextApi/context";
import BlogDetailPage from "./components/myBlog/blogDetailPage";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>

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

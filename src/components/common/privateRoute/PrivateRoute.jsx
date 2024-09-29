import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../../../contextApi/context";

function PrivateRoute({ children }) {
  const {
    store: { user },
  } = useAppContext();

  // console.log("Private route hit");

  if (!user.isLogin) {
    // console.log("user.isLogout hit");
    return <Navigate to="/" />;
  }
  if (user.isLogin) {
    // console.log("user.isLogin hit");
    return children;
  }
}

export default PrivateRoute;

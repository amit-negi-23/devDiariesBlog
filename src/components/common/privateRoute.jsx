import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../../contextApi/context";

function PrivateRoute({ children }) {
  const {
    store: { user },
  } = useAppContext();
  console.log("Private route hit");
  let decisionInput = useLocation();
  if (!user.isLogin) {
    console.log("user.isLogout hit");
    switch (decisionInput.pathname) {
      case "/":
        return children;
      case "/home":
        return children;
      case "/login":
        return children;
      case "/register":
        return children;
      case "/forgotpassword":
        return children;
      default:
        return <Navigate to="/" />;
    }
  }
  if (user.isLogin) {
    console.log("user.isLogin hit");
    switch (decisionInput.pathname) {
      case "/":
        return <Navigate to={`/userPage/${user.id}`} />;
      case "/home":
        return <Navigate to={`/userPage/${user.id}`} />;
      case "/login":
        return <Navigate to={`/userPage/${user.id}`} />;
      case "/register":
        return <Navigate to={`/userPage/${user.id}`} />;
      case "/forgotpassword":
        return <Navigate to={`/userPage/${user.id}`} />;
      default:
        return children;
    }
  }
}

export default PrivateRoute;

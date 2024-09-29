import React from "react";
import { useAppContext } from "../../../contextApi/context";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const { store:{user} } = useAppContext();
  
  // console.log("public route hit")

  if(!user.isLogin){
    return children;
  }
  if(user.isLogin){
    return <Navigate to={`/userpage/${user.id}`}/>
  }
}

export default PublicRoute;

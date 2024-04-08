import { useEffect } from "react";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navBar";
import {useLocation,useNavigate} from 'react-router-dom';

function Home() {
    const location=useLocation();
    const navigate=useNavigate();

useEffect(()=>{
if(location.pathname==='/'){
    navigate('/home');
}
},[])

  return (
    <>
      {/* <NavBar hideLink={"/home"} /> */}
      <NavBar />
      <h1>My Home Page</h1>
      <Footer />
    </>
  );
}
export default Home;

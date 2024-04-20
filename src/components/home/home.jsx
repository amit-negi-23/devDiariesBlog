import { useEffect, useState } from 'react';
import Footer from '../common/footer/footer';
import NavBar from '../common/navBar/navBar';
import { useLocation, useNavigate } from 'react-router-dom';
import useCustomDispatch from '../../hooks/useCustomDispatch';

function Home() {

  const [user, setUser] = useState({})

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useCustomDispatch()


  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, []);

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  function submit() {
    dispatch('user-update', user)
    setUser({});
  }

  return (
    <>
      <NavBar />
      <h1>My Home Page</h1>
      <h3>Enter your name and click on submit button to save in store</h3>
      <input type='text' name='firstName' value={user.firstName} onChange={onChangeHandler} />
      <button type='button' onClick={submit}>update store by submit</button>
      <Footer />
    </>
  );
}
export default Home;

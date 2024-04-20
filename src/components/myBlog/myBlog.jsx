import { useAppContext } from '../../contextApi/context';
import Footer from '../common/footer/footer';
import NavBar from '../common/navBar/navBar';

function MyBlog() {
  const { store } = useAppContext();
  return (
    <>
      {/* <NavBar hideLink={"/myblog"} /> */}
      <NavBar />
      <h1>My Blog Page</h1>
      <h2>{store.user.firstName}</h2>
      <Footer />
    </>
  );
}
export default MyBlog;

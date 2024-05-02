import { useLocation } from 'react-router-dom';
import Footer from '../common/footer/footer';
import NavBar from '../common/navBar/navBar';
import { useEffect } from 'react';
import { useState } from 'react';

function BlogDetailPage() {
  const [blog, setBlog] = useState({});

  const blogIdFromUrl = useLocation().pathname.split('/')[2];

  useEffect(() => {
    getBlogDetailById();
  }, [])

  async function getBlogDetailById() {
    // const response  = api call
    setBlog({ name: 'my first blog', description: "this is blog description" })
  }

  return (
    <>
      {/* <NavBar hideLink={"/myblog"} /> */}
      <NavBar />
      <h1>{blogIdFromUrl}</h1>
      <h2>{blog.name}</h2>
      <h2>{blog.description}</h2>
      <Footer />
    </>
  );
}
export default BlogDetailPage;

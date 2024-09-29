import { useEffect, useState } from "react";
import Footer from "../common/footer/Footer";
import NavBar from "../common/navBar/NavBar";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Home.css";
import { useAppContext } from "../../contextApi/context";

function Home() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const {store } = useAppContext();



  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);
// --------------------------------
useEffect(()=>{
  if(store.user.isLogin){
    navigate(`/userpage/${store.user.id}`)
    console.log("tring4:----")
  }
},[])
// ------------------------------
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts.");
        }
        const data = await response.json();
        // console.log("aa", data)
        setBlogPosts(data.posts.slice(0, 6));
        addBlogImage()
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const ImgArr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpONVq-8B8ZJzxiQH51Kme1tjqSszEXY-H2Q&s",
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
    "https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdInP51bhKHKrNwVuKxwdeuqhXXykZ9sIcg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0IjwDzWTgw8RkLJWiHAEQAnwP18rGDhrTg&s"
  ];

  function addBlogImage(){
    setBlogPosts((preVal)=>{
      return [...preVal,preVal.map((item,index)=>{
        return item["image"]=ImgArr[index]
      }) ]
        
    })
  }
    
  return (
    <>
      <NavBar />
      <div className="homepage position-relative z-n1 body-height">
        <header className="mt-5">
          <h1>Welcome to Dev Diaries Blog</h1>
        </header>
        <main>
          {loading ? (
            <div className="loader"></div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <>
              <section className="featured-posts">
                <h2>Featured Posts</h2>
                <div className="posts-list">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="post">
                      <img
                        src={post.image}
                        alt={`Post ${post.id}`}
                      />
                      <div className="post-content">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Link to={`/blog/${post.id}`} className="read-more">
                          Read more
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>
      </div>
      <footer>{<Footer />}</footer>
    </>
  );
}
export default Home;

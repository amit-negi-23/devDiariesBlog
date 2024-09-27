import { useEffect, useState } from 'react';
import Footer from '../common/footer/Footer';
import NavBar from '../common/navBar/NavBar';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Home.css'

function Home() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [])

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts.');
        }
        const data = await response.json();
        // console.log("aa", data)
        setBlogPosts(data.posts.slice(0, 6));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <>
      <NavBar />
      <div className="homepage position-relative z-n1 body-height">
        <header className='mt-5'>
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
                  {blogPosts.map(post => (
                    <article key={post.id} className="post">
                      <img src={`https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D`} alt={`Post ${post.id}`} />
                      <div className="post-content">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Link to={`/blog/${post.id}`} className="read-more">Read more</Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>
        
      </div>
      <footer>
          {<Footer />}
      </footer>


    </>
  );
}
export default Home;

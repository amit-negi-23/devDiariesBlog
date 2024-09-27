import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogPage.css";
import NavBar from "../common/navBar/NavBar";
import Footer from "../common/footer/Footer";

export default function BlogPage({ isLayout }) {
  const { category } = useParams("");
  const [data, setData] = useState(null);
  const [sideArticle, setSideArticle] = useState(null);
  

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/amit-negi-23/NewsServer/refs/heads/main/news.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return (
          console.log(data),
          setData(data[category].articles.slice(0, 2)),
          setSideArticle(data[category].articles.toSpliced(0, 2))
        );
      });
  }, [category]);

  return (
    <>
      {isLayout && <NavBar />}

      <div className="blog-container body-height">
        <div className="main-post">
          {data !== null &&
            data.map((article) => (
              <div className="post">
                <img src={article.urlToImage} alt="Main Post" />
                <div className="post-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <Link to="/abc">Read More</Link>
                </div>
              </div>
            ))}
        </div>
        <div className="side-posts">
          {sideArticle !== null &&
            sideArticle.map((article) => (
              <div className="post">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <Link to="/abc">Read More</Link>
              </div>
            ))}
        </div>
      </div>
      {isLayout && <Footer />}
    </>
  );
}

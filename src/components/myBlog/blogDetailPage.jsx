import { useLocation } from "react-router-dom";
import Footer from "../common/footer/footer";
import NavBar from "../common/navBar/navBar";
import "./blogDetailPage.css";
import { useEffect } from "react";
import { useState } from "react";
import pp from '../../assets/images/profile.png'

function BlogDetailPage() {
  const [blog, setBlog] = useState({});

  const blogIdFromUrl = useLocation().pathname.split("/")[2];

  useEffect(() => {
    getBlogDetailById();
  }, []);

  async function getBlogDetailById() {
    // const response  = api call
    setBlog({ name: "my first blog", description: "this is blog description" });
  }

  return (
    <>
      {/* <NavBar hideLink={"/myblog"} /> */}
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5">
            <h1>
              Mental Health in the Workplace: Why resilience and relevance
              matter
            </h1>
            <h5 className="text-secondary">
              From expanding access to quality mental health care to fostering
              community and peer support to avoiding burnout through early
              intervention, there is much we can do to foster mental wellbeing
            </h5>
            <hr />
            <div className="user_details">
              <div className="bd_profile_pic">
                <img src={pp} className="img-fluid" alt="" />
              </div>
              <div className="blog_details">
                <h6 className="fs-5 pb-3"> BY ARUNDHATI BHATTACHARYA</h6>
                <h6>UPDATED: Jun 3, 2024 12:39:09 PM UTC</h6>
              </div>
              </div>
              <hr />

              <div className="content mt-5">
                <img
                  src="https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/blog/wp-content/uploads/2024/06/shutterstock_1945115515_BG.jpg"
                  alt=""
                  className="img-fluid"
                />

                <p className="my-5">
                Once relegated to the shadows, mental health is now central to public discourse. Especially since the pandemic, more people are willing to talk about mental health within the workplace and beyond. Millennials and Gen Z, in particular, are unafraid to prioritise their mental wellbeing. Encouraged by their peers and celebrities opening up about mental health issues on social media, young people recognise that it's no longer something to be ashamed of. Mental illness can happen to anyone, anytime; it's no one's fault, and it's ok to seek help.
                </p>
              </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default BlogDetailPage;

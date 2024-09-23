import { useAppContext } from "../../contextApi/context";
import profilePic from "../../assets/images/profile.png";
import "./MyBlog.css";
import {
  getPost,
  deletePost,
  searchPostByTitle,
  labelUsedByUser,
  getPostByLabel,
} from "../common/api/postApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import pimg from "../../assets/images/catwallpaper.jpg";
import debounce from "../../utils/helper/debounceFunction";
// import useDebounce from "../../hooks/useDebounce";
import moment from "moment";
import "moment-timezone";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";

function MyBlog({ postTitle }) {
  const {
    store: { user },
  } = useAppContext();

  const [posts, setPosts] = useState([]);
  const [usedLabels, setUsedLabels] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [active, setActive] = useState("all");
  const [Loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  // console.log(typeof active)

  // const debounce = useDebounce()

  const getmyPost = async () => {
    setLoading(true);
    let res = await getPost(user.accessToken, page, limit);

    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    }
    //  else if (res && res.data.responseCode === 403) {
    //   toast.error(res.data.errMessage);
    // }
    else if (res && res.data.responseCode === 200) {
      setPosts((prevPosts) => [...prevPosts, ...res.data.data]);
      let hasMoreData = limit * page < res.data.pagination.totalItems;
      setHasMore(hasMoreData);
      if (hasMoreData) {
        setPage(page + 1);
      }
    } else if (res && res.data.responseCode === 400) {
      setPosts([]);
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong...");
    }
    setLoading(false);
    setIsFirstLoad(false);
  };

  const allUsedLabels = async () => {
    let res = await labelUsedByUser(user.accessToken);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 200) {
      setUsedLabels(res.data.data);
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
  };

  const getAllUserPostByLabel = async (label) => {
    setLoading(true);
    let res = await getPostByLabel(
      { label: label },
      user.accessToken,
      page,
      limit
    );
    // console.log("labelss", label);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 200) {
      setPosts((prevPosts) => [...prevPosts, ...res.data.data]);
      let hasMoreData = limit * page < res.data.pagination.totalItems;
      setHasMore(hasMoreData);
      if (hasMoreData) {
        setPage(page + 1);
      }
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
    setLoading(false);
    setIsFirstLoad(false);
  };

  const removePost = async (e, postId) => {
    let res = await deletePost(postId, user.accessToken);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    }
    //  else if (res && res.data.responseCode === 403) {
    //   toast.error(res.data.errMessage);
    // }
    else if (res && res.data.responseCode === 200) {
      toast.success(res.data.resMessage);
      // getmyPost();
      let result = posts.filter((post) => post._id != postId);
      setPosts(result);
      allUsedLabels();
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
    console.log(res);
    e.stopPropagation();
  };
  useEffect(() => {
    // getmyPost();
    allUsedLabels();
  }, []);

  const getPostByTitle = async () => {
    setLoading(true);
    let res = await searchPostByTitle(
      { title: postTitle },
      user.accessToken,
      page,
      limit
    );
    
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 200) {
      // setPosts(res.data.data);
      setPosts((prevPosts) => [...prevPosts, ...res.data.data]);

      let hasMoreData = limit * page < res.data.pagination.totalItems;
      setHasMore(hasMoreData);
      if (hasMoreData) {
        setPage(page + 1);
      }
    } else if (res && res.data.responseCode === 400) {
      // toast.error("Post dosen't exists")
      // setPosts([])
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong..");
    }
    setLoading(false);
    setIsFirstLoad(false);
  };

  const debouncedGetPostByTitle = () => {
    debounce(() => {
      getPostByTitle();
    }, 800);
  };

  // useEffect(()=>{
  //   if(!postTitle){
  //     getmyPost()
  //   }else{
  //     debounce(getPostByTitle,500)
  //   }
  // },[postTitle])

  useEffect(() => {
    setPage(1);
    setPosts([]);
    setIsFirstLoad(true);
    if (active === "all") {
      if (!postTitle) {
        getmyPost();
      } else {
        debouncedGetPostByTitle();
      }
    } else {
      getAllUserPostByLabel(active);
    }
  }, [postTitle, active]);
  // const extractImage =()=>{

  // }
  return (
    <>
      {user != null ? (
        <div className="col-10 offset-1 body-color">
          <div className="outer_label_container position-fixed">
            <div className="container label_container py-2 sticky-top">
              {/* <span
                className={
                  active == "all"
                    ? "badge  py-2 px-4 mx-3 my-2 border-1 pos bg-success fs-6 rounded-4"
                    : " badge text-dark  py-2 px-4 mx-3 my-2 border border-3 pos fs-6 rounded-4"
                }
                onClick={() => {
                  // getmyPost();
                  setActive("all");
                }}
              >
                All
              </span> */}

              {/* Left Button */}
              <button
                type="button"
                className="btn scroll-btn-left"
                onClick={() => {
                  document.querySelector(".label_list").scrollLeft -= 150;
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleLeft}
                  style={{ width: "29px", height: "29px" }}
                />
              </button>

              {/* Label List with Horizontal Scroll */}
              <div className="label_list d-flex align-items-center overflow-auto">
                <button
                  type="button"
                  className={
                    active == "all"
                      ? "btn btn-label btn-active"
                      : "btn btn-label btn-inactive"
                  }
                  onClick={() => setActive("all")}
                >
                  All
                </button>
                {usedLabels.length !== 0 &&
                  usedLabels.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className={
                          item == active
                            ? "btn btn-label btn-active"
                            : "btn btn-label btn-inactive"
                        }
                        onClick={() => {
                          // getAllUserPostByLabel(item);
                          setPage(1);
                          setPosts((prevPosts) => [...prevPosts]);
                          setActive(item);
                        }}
                        value={item}
                      >
                        {item}
                      </button>
                    );
                  })}
              </div>

              {/* Right Button */}
              <button
                type="button"
                className="btn scroll-btn-right"
                onClick={() => {
                  document.querySelector(".label_list").scrollLeft += 150;
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleRight}
                  style={{ width: "29px", height: "29px" }}
                />
              </button>
            </div>
          </div>

          <div className="container all_post_container py-3">
            <h4 className="heading">All Posts</h4>
            {Loading ? (
              <div className="text-center">
                <h5>Fetching Posts...</h5>
              </div>
            ) : posts.length > 0 ? (
              <InfiniteScroll
                dataLength={posts.length}
                next={() => {
                  if (postTitle) {
                    debouncedGetPostByTitle(); // If searching by title
                  } else if (active === "all") {
                    getmyPost(); // If viewing all posts
                  } else {
                    getAllUserPostByLabel(active); // If filtering by label
                  }
                }}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yipee! You have seen all posts</b>
                  </p>
                }
              >
                <ul className="list-group">
                  {posts.map((item) => {
                    return (
                      <Link
                        to={`/userpage/post/${user.id}/blogdetailpage`}
                        state={item}
                        className="nav-link d-inline-block mb-2"
                      >
                        <li
                          key={item._id}
                          className="list-group-items  d-flex justify-content-between align-items-center rounded-3 p-3 my-2"
                        >
                          <div className="start d-flex align-items-center">
                            <div className="thumbnail img-fluid m-2 border border-2 rounded">
                              <img
                                src={pimg}
                                alt="U"
                                className="img-fluid h-100"
                              ></img>
                            </div>
                            <div className="post-detail">
                              <h6>{item.title}</h6>
                              <p>{}</p>
                              {/* {item.createdAt == item.updatedAt?<span>Created : {item.createdAt.split("GMT")[0]}</span>:<span>Updated : {item.updatedAt.split("GMT")[0]}</span>} */}

                              <span>
                                {item.createdAt == item.updatedAt ? (
                                  <span>
                                    Created At :{" "}
                                    {moment
                                      .parseZone(item?.createdAt)
                                      ?.tz("Asia/Kolkata")
                                      ?.format(
                                        "ddd MMMM D, YYYY [at] h:mm:ss A"
                                      )}
                                  </span>
                                ) : (
                                  <span>
                                    Updated At :{" "}
                                    {moment
                                      .parseZone(item?.updatedAt)
                                      ?.tz("Asia/Kolkata")
                                      ?.format(
                                        "ddd MMMM D, YYYY [at] h:mm:ss A"
                                      )}
                                  </span>
                                )}
                              </span>
                            </div>
                            <div className="mid d-flex gap-2 align-self-end">
                              {item.labels.map((label) => {
                                return (
                                  <div
                                    className="label border border-3 rounded-4 px-2"
                                    key={label._id}
                                  >
                                    {label.name}
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div className="last d-flex gap-4">
                            <div className="end_btn me-4 d-flex justify-content-around">
                              <i
                                className="fa-solid fa-trash fs-5 del_btn p-2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  removePost(e, item._id);
                                }}
                              ></i>
                              <Link
                                to={`/userpage/post/${item._id}/edit`}
                                state={item}
                                className="nav-link d-inline-block p-2"
                              >
                                <i className="fa-solid fa-pen edit_btn fs-5"></i>
                              </Link>
                              <Link
                                to={`/userpage/${user.id}/post/blogdetailpage`}
                                state={item}
                                className="nav-link d-inline-block p-2"
                              >
                                <i className="fa-regular fa-eye edit_btn fs-5"></i>
                              </Link>
                            </div>
                            <div className="end_icons">
                              <div className="username d-flex align-items-center gap-1">
                                <h6 className="m-0">{user.username}</h6>
                                {/* <i class="fa-solid fa-trash"></i> */}
                                <div className="profile_pic broder border-2 rounded-circle">
                                  <img
                                    src={profilePic}
                                    alt="U"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="stats d-flex gap-0 p-2">
                                <div className="comment">
                                  <span className="p-2">4</span>
                                  <i className="fa-regular fa-comment"></i>
                                </div>
                                <div className="count">
                                  <span className="p-2">3</span>
                                  <i className="fa-solid fa-chart-simple"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </InfiniteScroll>
            ) : (
              !isFirstLoad && (
                <div className="text-center">
                  <h5>No Post Available</h5>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default MyBlog;

// import React, { useEffect, useState } from 'react';

// const ImageRenderer = () => {
//   const [imageSources, setImageSources] = useState([]);

//   useEffect(() => {
//     // Example HTML string containing image tags with base64 content
//     const htmlString = `
//       <html>
//       <body>
//           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...">
//           <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABA...">
//       </body>
//       </html>
//     `;

//     // Parse the HTML string to extract image sources
//     const tempElement = document.createElement('div');
//     tempElement.innerHTML = htmlString;

//     const imgElements = tempElement.getElementsByTagName('img');
//     const sources = [];
//     for (let i = 0; i < imgElements.length; i++) {
//       const src = imgElements[i].getAttribute('src');
//       if (src.startsWith('data:image')) {
//         sources.push(src);
//       }
//     }

//     // Update state with extracted image sources
//     setImageSources(sources);
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <div>
//       <h2>Images from HTML String:</h2>
//       {imageSources.map((src, index) => (
//         <img key={index} src={src} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
//       ))}
//     </div>
//   );
// };

// export default ImageRenderer;

// import React from 'react';

// const HtmlTagDeleter = ({ htmlString, tagToDelete }) => {
//   // Function to delete the specified tag from HTML string
//   const deleteTag = () => {
//     // Create a temporary element to hold the HTML string
//     const tempElement = document.createElement('div');
//     tempElement.innerHTML = htmlString;

//     // Select the tag(s) to delete using querySelectorAll
//     const elementsToDelete = tempElement.querySelectorAll(tagToDelete);

//     // Remove each selected element from the temporary DOM structure
//     elementsToDelete.forEach(element => {
//       element.parentNode.removeChild(element);
//     });

//     // Get the updated HTML string after deletion
//     const updatedHtmlString = tempElement.innerHTML;

//     // Display the updated HTML string (for demonstration)
//     console.log('Updated HTML string:', updatedHtmlString);

//     // You can optionally update state or perform further actions with the updated HTML string
//   };

//   return (
//     <div>
//       <h2>HTML Tag Deleter</h2>
//       <button onClick={deleteTag}>Delete {tagToDelete} tag</button>

//       {/* Display the original HTML string (for demonstration) */}
//       <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
//         <h3>Original HTML String:</h3>
//         <pre>{htmlString}</pre>
//       </div>
//     </div>
//   );
// };

// export default HtmlTagDeleter;

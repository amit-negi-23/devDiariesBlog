import { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "./richTextEditor.css";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/fontawesome-free-solid";
import {
  getAllLabels,
  getLabelByName,
  createNewLabel,
} from "../common/api/labelApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createNewPost, updatePost } from "../common/api/postApi";
import { useAppContext } from "../../contextApi/context";
import { useLocation, useNavigate } from "react-router-dom"; /**, useParams */

function RichTextEditor() {
  // const {postId} = useParams(null);
  const navigate = useNavigate();
  const location = useLocation();
  const postdata = location.state;
  console.log(postdata);
  const initialState = () => {
    return {
      userId: postdata?.userId ?? "",
      title: postdata?.title ?? "",
      content: postdata?.content ?? "",
      labels: postdata?.labels ?? "",
      comment_options: postdata?.comment_options ?? "allow",
    };
  };

  const {store: { user }} = useAppContext();

  const [post, setPost] = useState(initialState);
  const [allLabels, setAllLabels] = useState([]);
  const [flag, setFlag] = useState(false);
  const [myLabel, setMyLabel] = useState(postdata?.labels ?? []);
  const [searchedLabel, setSearchedLAbel] = useState({ name: undefined });

  const selectedLabel = (label) => {
    setMyLabel((preVal) => {
      return [...preVal, label];
    });
  };

  useEffect(() => {
    setPost((preVal) => {
      let labelId = myLabel.map((item) => {
        return item._id;
      });
      return { ...preVal, labels: labelId };
    });
  }, [myLabel]);

  const removeSelectedLabel = (label) => {
    const filteredLabel = myLabel.filter((myLab) => {
      return myLab._id !== label._id;
    });
    setMyLabel(filteredLabel);
  };

  const getAllLabelData = async () => {
    let labelData = await getAllLabels();
    if (labelData) {
      setAllLabels(labelData.data.data);
    }
  };
  /**************** code under review******************* */
  const getLabelName = useCallback(async () => {
    let labelData = await getLabelByName(searchedLabel);
    if (labelData && labelData.data.responseCode === 200) {
      setAllLabels(labelData.data.data);
    } else {
      setAllLabels([]);
    }
  }, [searchedLabel]);

  useEffect(() => {
    if (searchedLabel.name === "") {
      getAllLabelData();
    } else {
      getLabelName();
    }
  }, [searchedLabel, getLabelName]);
  //**React Hook useEffect has a missing dependency: 'getLabelName'. Either include it or remove the dependency array */

  /******************end ****************** */

  const onChangeHandler = (value, e) => {
    if (flag) return;
    // console.log(value);
    if (e) {
      setPost({ ...post, [e.target.name]: e.target.value });
    } else {
      setPost({ ...post, content: value });
    }
    // console.log(post);
  };

  const onChangeHandlerLabel = (event) => {
    setSearchedLAbel({ [event.target.name]: event.target.value });
  };

  const addNewLabel = async () => {
    const res = await createNewLabel(searchedLabel.name);
    console.log(res.data);
    if (res && res.data.responseCode === 201) {
      toast.success(res.data.resMessage);
      setMyLabel((preVal) => {
        return [...preVal, res.data.data];
      });
    } else {
      toast.error(res.data.errMessage);
    }
  };

  const publish = async (e) => {
    e.preventDefault();
    setFlag(true);
    if (!postdata) {
      await createPost();
      setPost({
        title: "",
        content: "",
        labels: "",
      });
      setTimeout(() => {
        setFlag(false);
      }, 1000);
    } else {
      editPost({ ...post, postId: postdata._id });
    }
  };

  const createPost = async () => {
    let res = await createNewPost(post, user.accessToken);
    if (res && res.data.responseCode === 401) {
      toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 403) {
      toast.error(res.data.errMessage);
    } else if (res && res.data.responseCode === 201) {
      toast.success(res.data.resMessage);
      navigate(`/userpage/${user.id}`);
    } else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    } else {
      toast.error("Something went wrong! ");
    }
  };

  const editPost = async (data) => {
    let res = await updatePost(data, user.accessToken);
    if(res && res.data.responseCode ===401){
      toast.error(res.data.errMessage)
    }
    else if(res && res.data.responseCode ===403){
      toast.error(res.data.errMessage)
    }
    else if(res.data.responseCode ===200){
        toast.success(res.data.resMessage)
     navigate(`/userpage/${user.id}`)
    }
    else if (res && res.data.responseCode === 400) {
      toast.error(res.data.errMessage);
    }
    else {
      toast.error("Something went wrong! ");
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],

      ["link", "image", "video"],
      [{ script: "sub" }, { script: "super" }],
      ["code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "size",
    "list",
    "bullet",
    "indent",
    "script",
    "link",
    "image",
    "video",
    "align",
    "color",
    "background",
    "code-block",
  ];
  return (
    <div className="quill-container">
      <div className="row w-100 d-flex g-5">
        <div className="col-md-10 cont_1 ">
          <div className="quill_title form-floating ">
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={(e) => onChangeHandler(e.target.value, e)}
              className="form-control px-2"
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput" className="px-4">
              Title
            </label>
          </div>
          <div className="quill-inner_container">
            <ReactQuill
              theme="snow"
              value={post.content}
              onChange={(value) => onChangeHandler(value)}
              modules={modules}
              formats={formats}
            />
          </div>
        </div>

        <div className="col-md-2 p-0 border border-1">
          <div className="quillSidebar py-3">
            <div
              className="accordion w-100"
              id="accordionPanelsStayOpenExample"
            >
              <button
                type="button"
                onClick={publish}
                className="btn btn-primary editor-btn mb-4 mt-2 ms-4 "
              >
                <FontAwesomeIcon icon={faChevronCircleRight} />
                Publish
              </button>
              <div className="accordion-item">
                <div className="post_setting p-2">
                  <h6>Post Settings</h6>
                </div>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Labels
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <input
                      type="text"
                      className="form-control label-input"
                      onClick={getAllLabelData}
                      onChange={onChangeHandlerLabel}
                      name="name"
                      value={searchedLabel.name}
                    />
                    <div>
                      <button
                        className="btn btn-primary mb-3"
                        onClick={addNewLabel}
                      >
                        Add New Label
                      </button>
                    </div>
                    {myLabel.map((label) => {
                      return (
                        <>
                          <span className="badge badge-pill badge-secondary bg-secondary mb-2 ms-2">
                            {label.name}
                          </span>
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => {
                              removeSelectedLabel(label);
                            }}
                            style={{ fontSize: "10px" }}
                          ></button>
                        </>
                      );
                    })}
                    <div
                      className="all_labels"
                      style={{
                        display: allLabels.length === 0 ? "none" : "block",
                      }}
                    >
                      <ul className="list-group">
                        {allLabels.length &&
                          allLabels.map((label) => {
                            return (
                              <li
                                key={label._id}
                                className="list-group-item"
                                onClick={() => {
                                  selectedLabel(label);
                                }}
                              >
                                {label.name}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Location
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body"></div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Option
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <h6 className="mb-4 fw-bold">Comments</h6>
                    <div>
                      <input
                        type="radio"
                        name="comment_options"
                        id="allow"
                        value={"allow"}
                        className="me-2"
                        onChange={(e) => {onChangeHandler("", e);}}
                        defaultChecked={postdata?.comment_options === "allow"? true: postdata? false: true}
                      />

                      <label htmlFor="allow">Allow</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="comment_options"
                        id="show_existing"
                        value={"show_existing"}
                        className="me-2"
                        onChange={(e) => {onChangeHandler("", e);}}
                        defaultChecked={postdata?.comment_options === "show_existing"? true: false}
                      />
                      <label htmlFor="show_existing">Show Existing</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="comment_options"
                        id="hide_existing"
                        value={"hide_existing"}
                        className="me-2"
                        onChange={(e) => {onChangeHandler("", e);}}
                        defaultChecked={postdata?.comment_options === "hide_existing"? true: false}
                      />

                      <label htmlFor="hide_existing">Hide Existing</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RichTextEditor;

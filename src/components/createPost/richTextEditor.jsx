import { useState } from "react";
import ReactQuill from "react-quill";
import "./richTextEditor.css";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleRight} from "@fortawesome/fontawesome-free-solid";

function RichTextEditor() {
  const [text, setText] = useState("");

  const publish = () => {
    console.log(text);
    setText("");
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
              className="form-control px-2"
              id="floatingInput"
              placeholder=""
            />
            <label for="floatingInput" className="px-4">
              Title
            </label>
          </div>
          <div className="quill-inner_container">
            <ReactQuill
              theme="snow"
              value={text}
              onChange={setText}
              modules={modules}
              formats={formats}
            />
          </div>
        </div>

        <div className="col-md-2 p-0 border border-1">
          <div className="quillSidebar py-3">
               
                <div className="accordion w-100" id="accordionPanelsStayOpenExample">
                <button
                  type="button"
                  onClick={publish}
                  className="btn btn-primary editor-btn mb-4 mt-2 ms-4 "
                >
                   <FontAwesomeIcon icon={faChevronCircleRight} /> 
                   Publish
                </button>
  <div className="accordion-item">
    <div className="post_setting p-2"><h6>Post Settings</h6></div>
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Labels
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <input type="text" className="form-control" />
        <button className="btn btn-primary">Add Label </button>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       Location
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       Option
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
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

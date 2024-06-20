import { useState } from "react";
import ReactQuill from "react-quill";
import "./richTextEditor.css";
import "react-quill/dist/quill.snow.css";

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
    <div className="container">
      <div className="quill_title form-floating ">
        <input
          type="email"
          className="form-control "
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Title</label>
      </div>
      <div className="quill-container">
        <ReactQuill
          theme="snow"
          value={text}
          onChange={setText}
          modules={modules}
          formats={formats}
        />
        <button
          type="button"
          onClick={publish}
          className="btn btn-primary editor-btn"
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default RichTextEditor;

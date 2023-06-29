import "./write.css";

import React from "react";

const Write = () => {
  return (
    <div className="write">
      <div className="cover-image">
        <img src="assets/tech01.png" alt="" />
      </div>
      <form className="formWrite">
        <div className="formWriteGroup">
          <label htmlFor="fileInput" className="writePicture">
            {" "}
            Add Picture
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeTitle"
            autoFocus={true}
          />
        </div>
        <div className="formWriteGroup">
          <textarea
            type="text"
            className="writeTitle writeText"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;

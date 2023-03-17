import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const Types = ["image/png", "image/jpg", "image/jpeg"];

  const handler = (e) => {
    let chose = e.target.files[0];
    if (chose && Types.includes(chose.type)) {
      setFile(chose);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handler} />
        <span>+</span>
      </label>
      <div className="display">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Upload;

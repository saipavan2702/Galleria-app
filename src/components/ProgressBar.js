import React from "react";
import useStorage from "../hooks/useStorage";
import { useEffect } from "react";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);

  useEffect(() => {
    if(url){
        setFile(null);
    }
  }, [url,setFile]);

  return (
    <div className="progress-bar" style={{width:progress+'%'}}>
    </div>
  );
};

export default ProgressBar;

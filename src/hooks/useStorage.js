import { useState, useEffect } from "react";
import { appStorage, db, timestamp} from "../firebase/config";

const useStroage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = appStorage.ref(file.name);
    const collecRef=db.collection('pics')

    storageRef.put(file).on(
      "file_added",
      function (snap) {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      function (err) {
        setError(err);
      },
      async function () {
        const url = await storageRef.getDownloadURL();
        const createdAt=timestamp();
        collecRef.add({ url, createdAt })
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStroage;

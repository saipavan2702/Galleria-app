import { db } from '../firebase/config';
import { useState, useEffect } from 'react';

const useFirestore = (collection) => {
    const [docs,setDocs]=useState([])

    useEffect(() => {
       const leave =db.collection(collection).orderBy('createdAt','desc').onSnapshot((snap)=>{
        let docx=[];
        snap.forEach((doc)=>{
            docx.push({...doc.data(), id:doc.id})
        })
        setDocs(docx)
       })

       return ()=>leave();

    }, [collection]);

  return {docs}
}

export default useFirestore

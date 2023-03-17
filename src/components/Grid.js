import React from 'react'
import useFirestore from '../hooks/useFirestore'

const Grid = ({setHandler}) => {
  const {docs}=useFirestore('pics')
  console.log(docs);

  return (
    <div className='img-grid'>
      { docs && docs.map((doc) => (
        <div className='img-wrap' key={doc.id} onClick={()=>setHandler(doc.url)}>
          <img src={doc.url} alt='show'/>
        </div>
      ))}
    </div>
  )
}

export default Grid

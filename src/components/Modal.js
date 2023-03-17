import React from 'react'

const Modal = ({handler,setHandler}) => {

    const handleClick=(event)=>{
        if(event.target.classList.contains('backdrop')){
            setHandler(null);
        }
    }
    
  return (
    <div className='backdrop' onClick={handleClick}>
      <img src={handler} alt='zoom'/>
    </div>
  )
}

export default Modal

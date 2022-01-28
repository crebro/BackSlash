import React from 'react';
import styles from "@styles/Modal.module.css"

function Modal({ children }) {
  return <div className='w-screen h-screen absolute top-0 left-0' style={{backdropFilter: "blur(2px)"}}>
  <div className={`bg-white opacity-100 text-black font-30 p-10 rounded-lg fixed top-10 left-1/3 right-1/3 z-50 shadow-lg ${styles['modal']}`}>
      {children}
  </div> </div>;
}

export default Modal;

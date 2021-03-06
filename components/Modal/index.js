import React from 'react';
import styles from "@styles/Modal.module.css"

function Modal({ children }) {
  return <div className='w-screen h-screen fixed top-0 left-0 z-50'>
  <div className={`bg-white opacity-100 text-black font-30 p-10 rounded-lg fixed top-10 left-0 right-0 lg:left-1/3 lg:right-1/3 z-50 shadow-lg ${styles['modal']}`}>
      {children}
  </div> </div>;
}

export default Modal;

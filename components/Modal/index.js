import React from 'react';
import styles from "@styles/Modal.module.css"

function Modal({ children }) {
  return <div className={`bg-white text-black font-30 p-10 rounded-lg fixed top-10 left-1/3 right-1/3 z-50 shadow-lg ${styles['modal']}`}>
      {children}
  </div>;
}

export default Modal;

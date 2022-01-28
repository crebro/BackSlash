import React from 'react';
import styles from "@styles/Fadein.module.css";

function LoadingPage() {
  return <div className={`bg-[#212529] w-screen h-screen flex items-center justify-center ${styles['fadeIn_animation']}`}>
        <div className={`font-poppins font-bold text-3xl flex items-center cursor-pointer text-white`}>
            <img src="/assets/images/logo.png" className='w-12 h-12' />
            BackSlash
        </div>
  </div>;
}

export default LoadingPage;

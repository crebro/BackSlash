import React from 'react';
import {GoFileSubmodule} from "react-icons/go";
import {FiSettings} from "react-icons/fi";
import {AiOutlineShareAlt} from "react-icons/ai";
import FileSystem from './widgets/FileSystem';

function SideBar({ onFileChange }) {
  return <div className='h-full flex'>
    <div className='bg-[#212529] w-20 text-white px-10 h-full flex flex-col items-center '> 
      <div className='my-4'> Menu </div>
      <div className='my-4 cursor-pointer relative flex items-center justify-center'> <GoFileSubmodule size={20} /> </div>
      <div className='my-4 cursor-pointer'> <FiSettings size={20}/></div>
      <div className='my-4 cursor-pointer'> <AiOutlineShareAlt size={20}/></div>
    </div>
    <FileSystem onFileChange={(fullpath) => onFileChange(fullpath)} /> 

  </div>;
}

export default SideBar;

import React from 'react';
import { BsLink45Deg, BsInfoLg } from "react-icons/bs";

function Collection({title, description}) {

  return <div className='p-4 font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4' >
      <div>
        <div className='text-2xl font-bold'> {title} </div>
        <div> {description} </div>
      </div>
      <div className='ml-20'>
        <div className='bg-[#3f4246] w-40 text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> Use <BsLink45Deg/> </div>
        <div className='bg-[#32649F] w-40 text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> View Details <BsInfoLg/> </div>
      </div>
  </div>;
}

export default Collection;

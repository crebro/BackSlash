import Link from 'next/link';
import React from 'react';
import { BsFillPencilFill } from "react-icons/bs";

function Template({ title, description, identifier }) {
  return <div className='p-4 font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4' >
      <div>
        <div className='text-2xl font-bold'> {title} </div>
        <div> {description} </div>
      </div>
      <div className='ml-20'>
        <Link href={`/development/${identifier}`}>
        <div className='bg-[#32649F] cursor-pointer w-40 text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm'> Editor <BsFillPencilFill/> </div>
        </Link>
      </div>
  </div>;
}

export default Template;

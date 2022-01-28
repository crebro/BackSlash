import React from 'react';
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from 'react/cjs/react.development';
import TemplateRequirementsModal from '../TemplateRequirementsModal';

function Template({ title, description, id }) {
  const [showRequirementsModal, setShowRequirementsModal] = useState(false);

  return <div className='p-4 font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4' >
      <div>
        <div className='text-2xl font-bold'> {title} </div>
        <div> {description} </div>
      </div>
      <div className='ml-20'>
        <div onClick={() => setShowRequirementsModal(true)} className='bg-[#32649F] cursor-pointer text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm'> Edit Collection Requirements &nbsp; <BsFillPencilFill size={15} /> </div>
      </div>
      {
        showRequirementsModal ? <TemplateRequirementsModal id={id} /> : ""
      }
  </div>;
}

export default Template;

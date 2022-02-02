import React from 'react';
import { BsLink45Deg } from "react-icons/bs";
import { useState } from 'react/cjs/react.development';
import UsageModal from './widgets/UsageModal';

function PreviewTemplate({template}) {
    const [showUsageModal, setShowUsageModal] = useState();

  return <div className='flex-col font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4' >
      <img className='w-full aspect-square object-fit rounded-t-sm' src={'http://localhost:8000/storage/' + template.preview_image} />
      <div className='p-4 flex flex-col items-center w-full'>
        <div className='pb-4'>
          <div className='text-2xl font-bold'> {template.name} </div>
          <div> {template.description} </div>
        </div>
        <div className='flex flex-col w-full items-center justify-center'>
          <div onClick={() => setShowUsageModal(true)} className='bg-[#3f4246] w-40 text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> Use <BsLink45Deg/> </div>
        </div>
      </div>

        {
            showUsageModal ? <UsageModal template={template} onModalClose={() => setShowUsageModal(false)} /> : ""
        }
  </div>;
}

export default PreviewTemplate;


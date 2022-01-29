import React from 'react';
import { BsLink45Deg } from "react-icons/bs";
import { useState } from 'react/cjs/react.development';
import UsageModal from './widgets/UsageModal';

function PreviewTemplate({template}) {
    const [showUsageModal, setShowUsageModal] = useState();

  return <div className='p-4 font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4' >
      <div>
        <div className='text-2xl font-bold'> {template.name} </div>
        <div> {template.description} </div>
      </div>
      <div className='ml-20'>
        <div onClick={() => setShowUsageModal(true)} className='bg-[#3f4246] w-40 text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> Use <BsLink45Deg/> </div>
      </div>

        {
            showUsageModal ? <UsageModal template={template} onModalClose={() => setShowUsageModal(false)} /> : ""
        }
  </div>;
}

export default PreviewTemplate;


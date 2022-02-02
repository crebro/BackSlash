import putParamsOnUrl from '@utils/putParamsonUrl';
import Link from 'next/link';
import React from 'react';
import { BsLink45Deg, BsInfoLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useState } from 'react/cjs/react.development';
import WorkingTemplateDeletionModal from './widgets/WorkingTemplateDeletionModal';
import WorkingTemplateValuesUpdateModal from './widgets/WorkingTemplateUpdateModal';

function CollectionItem({workingTemplate, onUpdate, onDelete}) {
  const [showUpdateRequirements, setShowUpdateRequirements] = useState(false);
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  return <div className='flex-col font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4' >
      <img className='w-full aspect-square object-fit rounded-t-sm' src={'http://localhost:8000/storage/' + workingTemplate.template.preview_image} />
      <div className='p-4 flex flex-col items-center w-full'>
        <div className='pb-4'>
          <div className='text-2xl font-bold'> {workingTemplate.template.name} </div>
          <div> {workingTemplate.template.description} </div>
        </div>
        <div className='flex flex-col w-full items-center justify-center'>
          <Link href={putParamsOnUrl(workingTemplate.template.template_url, workingTemplate.values)}>
            <a className='w-full' target={"_blank"} rel="noreferrer">
            <div className='bg-[#3f4246] w-full text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> Use <BsLink45Deg/> </div> 
            </a>
          </Link>
          <div onClick={() => setShowUpdateRequirements(true)} className='w-full bg-[#32649F] text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> View Details <BsInfoLg/> </div>
          <div onClick={() => setShowDeletionModal(true)} className='w-full bg-red-500 cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Delete Template &nbsp; <AiFillDelete size={15} /> </div>
        </div>
      </div>

      {
        showUpdateRequirements ? 
        <WorkingTemplateValuesUpdateModal onUpdate={onUpdate} workingTemplate={workingTemplate} onModalClose={() => setShowUpdateRequirements(false)} /> : ""
      }
      {
        showDeletionModal ? 
        <WorkingTemplateDeletionModal onModalClose={() => setShowDeletionModal(false)} onWorkingTemplateDelete={() => onDelete()} workingTemplate={workingTemplate} /> : ""
      }
  </div>;
}

export default CollectionItem;

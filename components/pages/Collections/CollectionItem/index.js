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

  return <div className='p-4 font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4' >
      <div>
        <div className='text-2xl font-bold'> {workingTemplate.template.name} </div>
        <div> {workingTemplate.template.description} </div>
      </div>
      <div className='ml-20'>
        <Link href={putParamsOnUrl(workingTemplate.template.template_url, workingTemplate.values)}>
          <a target={"_blank"} rel="noreferrer">
          <div className='bg-[#3f4246] w-40 text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> Use <BsLink45Deg/> </div> 
          </a>
        </Link>
        <div onClick={() => setShowUpdateRequirements(true)} className='bg-[#32649F] w-40 text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> View Details <BsInfoLg/> </div>
        <div onClick={() => setShowDeletionModal(true)} className='bg-red-500 cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Delete Template &nbsp; <AiFillDelete size={15} /> </div>
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

import putParamsOnUrl from '@utils/putParamsonUrl';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsLink45Deg, BsInfoLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import WorkingTemplateDeletionModal from './widgets/WorkingTemplateDeletionModal';
import WorkingTemplateValuesUpdateModal from './widgets/WorkingTemplateUpdateModal';
import CardItem from '@components/CardsDisplay/widgets/CardItem';

function CollectionItem({workingTemplate, onUpdate, onDelete}) {
  const [showUpdateRequirements, setShowUpdateRequirements] = useState(false);
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  return <div >
    <CardItem template={workingTemplate.template}>
        <Link passHref href={putParamsOnUrl(workingTemplate.template.template_url, workingTemplate.values)}>
          <a className='w-full' target={"_blank"} rel="noreferrer">
          <div className='bg-[#3f4246] w-full text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> Use <BsLink45Deg/> </div> 
          </a>
        </Link>
        <div onClick={() => setShowUpdateRequirements(true)} className='w-full bg-[#32649F] text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> View Details <BsInfoLg/> </div>
        <div onClick={() => setShowDeletionModal(true)} className='w-full bg-red-500 cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Delete Template &nbsp; <AiFillDelete size={15} /> </div>
    </CardItem>
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

import CardItem from '@components/CardsDisplay/widgets/CardItem';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from 'react/cjs/react.development';
import TemplateDeletionModal from '../TemplateDeletionModal';
import TemplateFormModal from '../TemplateFormModal';
import TemplateRequirementsModal from '../TemplateRequirementsModal';

function Template({ template, onTemplateUpdate }) {
  const [showRequirementsModal, setShowRequirementsModal] = useState(false);
  const [showEditingModal, setShowEditingModal] = useState(false);
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  return <div >
    <CardItem template={template}> 
      <div onClick={() => setShowRequirementsModal(true)} className='w-full bg-[#32649F] cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Edit Requirements &nbsp; <BsFillPencilFill size={15} className='ml-2' /> </div>
      <div onClick={() => setShowEditingModal(true)} className='w-full bg-[#32649F] cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Edit Template Details &nbsp; <BsFillPencilFill size={15} /> </div>
      <div onClick={() => setShowDeletionModal(true)} className='w-full bg-red-500 cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Delete Template &nbsp; <AiFillDelete size={15} /> </div>
    </CardItem>
      
      {
        showDeletionModal ? <TemplateDeletionModal  onTemplateDelete={() => onTemplateUpdate()} onModalClose={() => setShowDeletionModal(false)} template={template} /> : ""
      }
      {
        showRequirementsModal ? <TemplateRequirementsModal  onModalClose={() => setShowRequirementsModal(false)} id={template.id} /> : ""
      }
      {
        showEditingModal ? <TemplateFormModal onTemplateSubmit={() => onTemplateUpdate()} template={template} onModalClose={() => setShowEditingModal(false)} /> : ""
      }

  </div>;
}

export default Template;

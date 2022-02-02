import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from 'react/cjs/react.development';
import TemplateDeletionModal from '../TemplateDeletionModal';
import TemplateEditingModal from '../TemplateEditingModal';
import TemplateRequirementsModal from '../TemplateRequirementsModal';

function Template({ template, onTemplateUpdate }) {
  const [showRequirementsModal, setShowRequirementsModal] = useState(false);
  const [showEditingModal, setShowEditingModal] = useState(false);
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  return <div className='font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4 flex-col' >
      <img className='w-full aspect-square object-fit rounded-t-sm' src={'http://localhost:8000/storage/' + template.preview_image} />
      <div className='p-4 flex flex-col items-center w-full'>
        <div className='pb-4'>
          <div className='text-2xl font-bold'> {template.name} </div>
          <div> {template.description} </div>
        </div>
        <div className='flex flex-col w-full items-center justify-center'>
          <div onClick={() => setShowRequirementsModal(true)} className='w-full bg-[#32649F] cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Edit Requirements &nbsp; <BsFillPencilFill size={15} className='ml-2' /> </div>
          <div onClick={() => setShowEditingModal(true)} className='w-full bg-[#32649F] cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Edit Template Details &nbsp; <BsFillPencilFill size={15} /> </div>
          <div onClick={() => setShowDeletionModal(true)} className='w-full bg-red-500 cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Delete Template &nbsp; <AiFillDelete size={15} /> </div>
        </div>
      </div>
      {
        showDeletionModal ? <TemplateDeletionModal  onTemplateDelete={() => onTemplateUpdate()} onModalClose={() => setShowDeletionModal(false)} template={template} /> : ""
      }
      {
        showRequirementsModal ? <TemplateRequirementsModal  onModalClose={() => setShowRequirementsModal(false)} id={template.id} /> : ""
      }
      {
        showEditingModal ? <TemplateEditingModal onTemplateUpdate={() => onTemplateUpdate()} template={template} onModalClose={() => setShowEditingModal(false)} /> : ""
      }

  </div>;
}

export default Template;

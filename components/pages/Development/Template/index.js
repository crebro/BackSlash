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

  return <div className='p-4 font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4' >
      <div>
        <div className='text-2xl font-bold'> {template.name} </div>
        <div> {template.description} </div>
      </div>
      <div className='ml-20'>
        <div onClick={() => setShowRequirementsModal(true)} className='bg-[#32649F] cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Edit Collection Requirements &nbsp; <BsFillPencilFill size={15} className='ml-2' /> </div>
        <div onClick={() => setShowEditingModal(true)} className='bg-[#32649F] cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Edit Template Details &nbsp; <BsFillPencilFill size={15} /> </div>
        <div onClick={() => setShowDeletionModal(true)} className='bg-red-500 cursor-pointer text-xs flex px-4 py-2 justify-between items-center text-white rounded-sm'> Delete Template &nbsp; <AiFillDelete size={15} /> </div>
      </div>
      {
          showDeletionModal ? <TemplateDeletionModal  onTemplateDelete={() => onTemplateUpdate()} onModalClose={() => setShowRequirementsModal(false)} template={template} /> : ""
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

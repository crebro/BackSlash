import { deleteTemplate } from '@api/requests/templates';
import Modal from '@components/Modal';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';

function TemplateDeletionModal({ onModalClose, onTemplateDelete, template }) {
    const submit = () => {;
        const deletionPromise = deleteTemplate({ template_id: template.id}).then(() => {
            onTemplateDelete();
            onModalClose();
        }).catch((error) => {
            console.log(error);
        });
        toast.promise(deletionPromise, {
            loading: "Deleting the template...",
            error: "Failed to delete the template",
            success: "Succesfully created the template"
        })
    }

  return <Modal>
        <div className='text-xl font-poppins font-bold'> Delete Template? </div>
        <div className='text-sm'> You are about to delete the template {template.name}. Are you sure you want to do this? This action is completely irreversible  </div>

        <div className='flex items-center justify-center mt-4'>
            <button onClick={() => submit()} className='w-full rounded-lg py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold' > Submit </button>
            <div onClick={() => onModalClose()} className='w-full cursor-pointer rounded-lg py-2 px-4 outline-none bg-red-500 text-white font-poppins font-bold flex items-center justify-center' > Dismiss </div>
        </div>
  </Modal>;
}

export default TemplateDeletionModal;

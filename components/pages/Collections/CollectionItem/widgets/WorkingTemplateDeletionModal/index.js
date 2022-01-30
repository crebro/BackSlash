import { deleteWorkingTemplate } from '@api/requests/working_templates';
import Modal from '@components/Modal';
import React  from 'react';
import toast from 'react-hot-toast';

function WorkingTemplateDeletionModal({ onModalClose, onWorkingTemplateDelete, workingTemplate }) {
    const submit = () => {;
        const deletionPromise = deleteWorkingTemplate(workingTemplate.id).then(() => {
            onWorkingTemplateDelete();
            onModalClose();
        })
        toast.promise(deletionPromise, {
            loading: "Deleting the working template...",
            error: "Failed to delete the working template",
            success: "Successfully deleted the working template"
        })
    }

  return <Modal>
        <div className='text-xl font-poppins font-bold'> Delete Template? </div>
        <div className='text-sm'> You are about to delete a working template from your collection. Are you sure you want to do this? This action is completely irreversible  </div>

        <div className='flex items-center justify-center mt-4'>
            <button onClick={() => submit()} className='w-full rounded-lg py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold' > Submit </button>
            <div onClick={() => onModalClose()} className='w-full cursor-pointer rounded-lg py-2 px-4 outline-none bg-red-500 text-white font-poppins font-bold flex items-center justify-center' > Dismiss </div>
        </div>
  </Modal>;
}

export default WorkingTemplateDeletionModal;

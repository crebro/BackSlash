import { createTemplate } from '@api/requests/templates';
import Modal from '@components/Modal';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';

function TemplateFormModal({ onModalClose, onTemplateSubmit, template }) {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const templateUrlRef = useRef();
    const imageRef = useRef();

    const create = () => {;
        const nameValue = nameRef.current.value;
        const descriptionValue =  descriptionRef.current.value;
        const templateUrlValue = templateUrlRef.current.value;
        const imageValue = imageRef.current.files[0];
        
        if (!nameValue || !descriptionValue) {
            toast.error("Please fill in all the fields");
            return;
        }
        const creationPromise = createTemplate({ name: nameValue, description: descriptionValue, template_url: templateUrlValue, preview_image: imageValue}).then(() => {
            onTemplateSubmit();
            onModalClose();
        })
        toast.promise(creationPromise, {
            loading: "Creating a Template...",
            error: "Failed to create a template",
            success: "Succesfully created a template"
        })
    }

    const update = () => {
        const nameValue = nameRef.current.value;
        const descriptionValue =  descriptionRef.current.value;
        const templateUrlValue = templateUrlRef.current.value;
        const imageValue = imageRef.current.files[0];
        
        if (!nameValue || !descriptionValue) {
            toast.error("Please fill in all the fields");
            return;
        }
        const creationPromise = updateTemplate({ template_id: template.id, name: nameValue, description: descriptionValue, template_url: templateUrlValue, preview_image: imageValue}).then(() => {
            onTemplateSubmit();
            onModalClose();
        });
        toast.promise(creationPromise, {
            loading: "Updating Template...",
            error: "Failed to update the template",
            success: "Succesfully updated the template"
        })
    }

  return <Modal>
        <div className='text-xl font-poppins font-bold'> { template ? "Edit your Template" : "Create your awesome Template!" } </div>
        <div className='text-lg mt-4 font-poppins'> Enter a name</div>
        <input ref={nameRef} defaultValue={template ? template.name : ''} type="text" className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm w-full' placeholder="My amazing template" />
        <div className='text-lg mt-4 font-poppins'> Attach an image </div>
        <input ref={imageRef} type="file" className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm w-full' />
        <div className='text-lg mt-4 font-poppins'> Enter the template url</div>
        <input ref={templateUrlRef} defaultValue={template ? template.template_url : ''} type="text" className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm w-full' placeholder="https://myamazingmteplatewebsite.com" />
        <div className='text-lg mt-4 font-poppins'> Add a description </div>
        <textarea ref={descriptionRef} defaultValue={template ? template.description : ''} className='mt-2 py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm w-full' /> 

        <div className='flex items-center justify-center mt-4'>
            <button onClick={() => template ? update() : create()} className='w-full rounded-lg py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold' > Submit </button>
            <div onClick={() => onModalClose()} className='w-full cursor-pointer rounded-lg py-2 px-4 outline-none bg-red-500 text-white font-poppins font-bold flex items-center justify-center' > Dismiss </div>
        </div>
  </Modal>;
}

export default TemplateFormModal;

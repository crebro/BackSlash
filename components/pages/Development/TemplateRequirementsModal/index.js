import { createTemplateRequirement, getTemplateRequirements } from '@api/requests/templates';
import Modal from '@components/Modal';
import React from 'react';
import toast from 'react-hot-toast';
import { useEffect, useRef, useState } from 'react/cjs/react.development';
import Requirement from './widgets/requirement';
import { AiFillCloseCircle } from "react-icons/ai";
import FlipMove from 'react-flip-move';

function TemplateRequirementsModal({ id, onModalClose }) {
    const [requirements, setRequirements] = useState([]);
    const newRequirementRef = useRef();
    const isRequiredRef = useRef();
    const requirementTypeRef = useRef();

    const getRequirements = async () => {
        const data = await getTemplateRequirements(id);
        setRequirements(data);
    }

    const createRequirement = async () => {
        const newRequirementValue = newRequirementRef.current.value;
        const isRequiredValue = isRequiredRef.current.checked ? 1 : 0;
        const requirementTypeValue = requirementTypeRef.current.value;

        if (newRequirementValue && requirementTypeValue) {
            const requirementCreationPromise = createTemplateRequirement({
                template_id: id, key: newRequirementValue, is_required: isRequiredValue, type: requirementTypeValue
            }).then((data) => {
                getRequirements();
            }).catch((error) => {
                console.log(eror.response.data);
            })
            toast.promise(requirementCreationPromise, {
                loading: "Creating requirement ...",
                error: "Failed to create requirement",
                success: "Successfully created Requirement"
            })
        } else {
            toast.error("Please fill in all the fields");
        }

    }

    useEffect(() => {
        getRequirements();
    }, [])

  return <Modal>
        <div className='absolute cursor-pointer rounded-lg bg-red-500 text-white px-2 py-2 top-[10px] right-[10px]' onClick={() => onModalClose()}> <AiFillCloseCircle/> </div>
        <div className='font-bold font-poppins'> Edit your template requirements</div>
        <div>
            <input ref={newRequirementRef} type="text" className='w-full py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm mt-2' placeholder="Your Requirement key that you will recieve as" />
            <div className='flex items-center my-2'> Is Required Requirement &nbsp; <input type="checkbox" ref={isRequiredRef} /> </div>
            <select className='w-full py-2 mb-2 px-4 outline-none bg-[#C4C4C4] rounded-sm' ref={requirementTypeRef}>
                <option value="text">Text </option>
                <option value="color">Color </option>
                <option value="date">Date</option>
            </select>
            <button onClick={() => createRequirement()} className='w-full rounded-lg py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold' > Create </button>
        </div>
        <div className='mt-4 text-black font-bold font-poppins'>
            Your Template Requirements
        </div>
        <FlipMove>
        {
            requirements.map((requirement) => {
                return <div key={requirements.indexOf(requirement)}> <Requirement id={requirement.id} requirementKey={requirement.key} is_required={requirement.is_required} template_id={id} onDelete={() => {setRequirements(requirements.filter((req) => req.id != requirement.id))}} /> </div>
            })
        }
        </FlipMove>
  </Modal>;
}

export default TemplateRequirementsModal;

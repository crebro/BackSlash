import { getTemplateRequirements } from '@api/requests/templates';
import Modal from '@components/Modal';
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import {  updateWorkingTemplate as updateWorkingTemplateApi } from '@api/requests/working_templates';
import toast from 'react-hot-toast';
import RequirementField from '@components/pages/Explore/widgets/RequirementField';

function WorkingTemplateValuesUpdateModal({ workingTemplate, onModalClose, onUpdate }) {
    const [requirements, setTemplateRequirements] = useState(false);
    const [data, setData] = useState(workingTemplate.values);

    const getRequirements = async () => {
        const data = await getTemplateRequirements(workingTemplate.template.id);
        setTemplateRequirements(data);
    }

    const updateWorkingTemplate = () => {
        updateWorkingTemplateApi(workingTemplate.id, data).then((response) => {
            if (response.success) {
                toast.success("Successfully updated the template to your collection");
                onModalClose();
                onUpdate(data);
            } else {
                toast.error("There might be something wrong with the provided data");
            }
        }).catch((error) => {
            console.log(error);
            toast.error("Failed to update template");
        });
    }

    useEffect(() => {
        getRequirements()
    }, [])

  return <Modal> 
        <div className='absolute cursor-pointer rounded-lg bg-red-500 text-white px-2 py-2 top-[10px] right-[10px]' onClick={() => onModalClose()}> <AiFillCloseCircle/> </div>
        <div className='font-bold font-poppins text-xl my-2'> Edit your Working Template </div>
        {
            requirements ? <div>
                {
                    requirements.map((requirement) => {
                        return <div key={requirement.id}> <RequirementField value={data[requirement.key]} requirement={requirement} onChange={(value) => { setData((prevData) => { return { ...prevData, [requirement.key]: value, }})}} /> </div>
                    })
                }
                <button onClick={() => updateWorkingTemplate()} className='my-4 w-full rounded-lg py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold' > Submit </button>
            </div> : ''
        } 
    </Modal>;
}

export default WorkingTemplateValuesUpdateModal;

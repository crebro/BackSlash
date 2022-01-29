import { getTemplateRequirements } from '@api/requests/templates';
import Modal from '@components/Modal';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { AiFillCloseCircle } from 'react-icons/ai';
import { createWorkingTemplate as createWorkingTemplateApi } from '@api/requests/working_templates';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import RequirementField from './RequirementField';

function UsageModal({ template, onModalClose }) {
    const [requirements, setTemplateRequirements] = useState(false);
    const [data, setData] = useState({});
    const router = useRouter();

    const getRequirements = async () => {
        const data = await getTemplateRequirements(template.id);
        setTemplateRequirements(data);
    }

    const createWorkingTemplate = async () => {
        createWorkingTemplateApi(template.id, data).then((response) => {
            if (response.success) {
                toast.success("Successfully added the template to your collection");
            } else {
                toast.error("There might be something wrong with the provided data");
            }
        }).catch((error) => {
            toast.error("Failed to add template to your collection");
        });
        router.push('/collections');
    }

    useEffect(() => {
        getRequirements()
    }, [])

  return <Modal> 
        <div className='absolute cursor-pointer rounded-lg bg-red-500 text-white px-2 py-2 top-[10px] right-[10px]' onClick={() => onModalClose()}> <AiFillCloseCircle/> </div>
        <div className='font-bold font-poppins text-xl my-2'> Add template to your collection </div>
        {
            requirements ? <div>
                {
                    requirements.map((requirement) => {
                        return <RequirementField value={data[requirement.key]} requirement={requirement} onChange={(value) => { setData((prevData) => { return { ...prevData, [requirement.key]: value, }})}} />
                    })
                }
                <button onClick={() => createWorkingTemplate()} className='my-4 w-full rounded-lg py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold' > Submit </button>
            </div> : ''
        } 
    </Modal>;
}

export default UsageModal;

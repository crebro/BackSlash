import { getTemplateRequirements } from '@api/requests/templates';
import Modal from '@components/Modal';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { AiFillCloseCircle } from 'react-icons/ai';
import { createWorkingTemplate as createWorkingTemplateApi } from '@api/requests/working_templates';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import RequirementField from './RequirementField';
import { UserContext } from 'context/UserContext';
import putParamsOnUrl from '@utils/putParamsonUrl';
import Link from 'next/link';

function UsageModal({ template, onModalClose }) {
    const [requirements, setTemplateRequirements] = useState(false);
    const [data, setData] = useState({});
    const router = useRouter();
    const [isAuthenticated] = useContext(UserContext);

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
        <div className='text-sm mb-4'> Fill in the following fields to continue, if there are none, you can continue as well. Fields marked <span className='text-red-500'>*</span> are mandatory </div>
        {
            requirements ? <div>
                {
                    requirements.map((requirement) => {
                        return <div key={requirements.indexOf(requirement)} ><RequirementField value={data[requirement.key]} requirement={requirement} onChange={(value) => { setData((prevData) => { return { ...prevData, [requirement.key]: value, }})}} /> </div>
                    })
                }
                {
                    isAuthenticated ? 
                    <div className='flex item-center justify-center'> 
                        <button onClick={() => createWorkingTemplate()} className='mx-2 mt-4 w-full rounded-lg py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold' > Continue </button> 
                        <Link passHref href={putParamsOnUrl(template.template_url, data)}>
                            <a className='w-full' target={"_blank"} rel="noreferrer">
                                <div className='text-center mx-2 mt-4 w-full rounded-lg py-2 px-4 outline-none bg-[#3f4246] text-white font-poppins font-bold' > Preview </div> 
                            </a>
                        </Link>
                    </div> : 
                    <Link passHref href={putParamsOnUrl(template.template_url, data)}>
                        <a className='w-full' target={"_blank"} rel="noreferrer">
                            <div className='text-center mx-2 mt-4 w-full rounded-lg py-2 px-4 outline-none bg-[#3f4246] text-white font-poppins font-bold' > Preview </div> 
                        </a>
                    </Link>
                }
            </div> : ''
        } 
    </Modal>;
}

export default UsageModal;

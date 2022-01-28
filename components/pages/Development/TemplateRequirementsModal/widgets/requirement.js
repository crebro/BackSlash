import { deleteTemplateRequirement } from '@api/requests/templates';
import React from 'react';
import toast from 'react-hot-toast';
import { IoMdRemoveCircle } from "react-icons/io";

function Requirement({ id, requirementKey, is_required, type, template_id, onDelete}) {
    const deleteRequirement = async () => {
        const response = deleteTemplateRequirement(template_id, id).then((response) => {
            onDelete();
        });
        toast.promise(response, {
            loading: "Deleted requirement ..",
            success: "Successfully deleted requirement",
            error: "Failed to delete the requirement"
        })
    }

  return <div className='flex items-center'> 
      <div className='bg-[#CED4DA] my-2 rounded-sm px-4 py-2 w-full flex items-center justify-between'>  <div>{requirementKey} </div> { is_required ? <div className='text-sm px-2 py-1 bg-green-600 text-white rounded-sm' > is required</div> : "" } </div> 
      <div onClick={() => deleteRequirement()} className='p-2 bg-red-500 rounded-lg text-white cursor-pointer'> <IoMdRemoveCircle size={30}/> </div>
  </div>;
}

export default Requirement;

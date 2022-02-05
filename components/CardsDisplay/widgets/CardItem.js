import { requestAddress } from '@api/constants';
import React from 'react';

function CardItem({ template, children }) {
  return <div className='font-poppins bg-[#CED4DA] flex rounded-sm justify-between items-center my-4 flex-col' >
      <img className='w-full aspect-square object-cover rounded-t-sm' src={`${requestAddress}/storage/` + template.preview_image} />
      <div className='p-4 flex flex-col items-center w-full'>
        <div className='pb-4'>
          <div className='text-2xl font-bold'> {template.name} </div>
          <div> {template.description} </div>
        </div>
        <div className='flex flex-col w-full items-center justify-center'>
            {children}
        </div>
      </div>
  </div>;
}

export default CardItem;

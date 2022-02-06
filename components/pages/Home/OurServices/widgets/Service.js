import React from 'react';

function Service({image, name, description}) {
  // for later use: w-[90%] sm:w-[50%] md:w-[60%] lg:w-[25%] xl:w-[18%]
  return <div className='bg-[#E9ECEF] rounded-lg text-black mx-2 w-full  shadow-lg'>
      <img src={image} className='rounded-t-lg object-cover aspect-square w-full' />
      <div className='p-4'>
        <div className='font-poppins text-2xl font-normal'> {name} </div>
        <div className='font-nunito text-sm'> {description} </div>
      </div>
  </div>;
}

export default Service;

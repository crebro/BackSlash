// import { Console } from 'console-feed';
import React from 'react';

function DevelopmentConsole({ logValues }) {
  return <div className='absolute w-full bottom-0 left-0 bg-white rounded-t-lg'> 
    <div className='w-full rounded-t-lg font-poppins text-xl px-4 py-2 flex justify-between'> Console 
     </div>
    <div className='h-28 w-full bg-[#CED4DA] px-4 py-2'>
        Your Console is here <br/>
        {/* <Console logs={logValues} variant='dark' /> */}
    </div>
  </div>;
}

export default DevelopmentConsole;

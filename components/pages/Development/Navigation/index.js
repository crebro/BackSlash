import { UserContext } from 'context/UserContext';
import React from 'react';
import { useContext } from 'react/cjs/react.development';

function DevelopmentNavigation({projectName, inProject}) {
     const [, user] = useContext(UserContext);

  return <div className='py-4 bg-[#212529] text-white flex items-center justify-around w-screen'>
       <div className='font-poppins font-bold text-xl flex items-center'>
           <img src="/assets/images/logo.png" className='w-8 h-8' />
           BackSlash Devleopment
       </div>
       <div className='flex font-poppins font-bold'>
            {
               inProject ?  
                    `${user.name}/Customizable Project` : `${user.name}`
            }
       </div>
  </div>;
}

export default DevelopmentNavigation;

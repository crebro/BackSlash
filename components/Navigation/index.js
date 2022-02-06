import { UserContext } from 'context/UserContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import styles from "@styles/Navigation.module.css"

function Navigation() {
     const [authenticated, user, logout] = useContext(UserContext);
     const [showUserMenu, setShowUserMenu] = useState(false);

     return <div className={`py-4 bg-[#212529] text-white flex flex-wrap items-center justify-around w-screen ${styles['navigation']}`}>
          <Link passHref href="/">
               <div className='font-poppins font-bold text-3xl flex items-center cursor-pointer'>
                    <img src="/assets/images/logo.png" className='w-12 h-12' />
                    BackSlash
               </div>
          </Link>
          <div className='flex items-center justify-center font-poppins font-bold flex-wrap'>
               <div className='mx-4 cursor-pointer'>Home</div>
               <Link passHref href="/explore">
                  <div className='mx-4 cursor-pointer'> Explore </div> 
               </Link>


            {
          !authenticated ?
          <Link passHref href="/auth/register"><div className='mx-4 cursor-pointer'>Register</div></Link>
          : <>  
               {
                    user.is_developer ? <Link passHref href="/collections">
                         <div className='mx-4 cursor-pointer'> Devleopment </div> 
                    </Link> : ""
               }
               <Link passHref href="/collections">
                  <div className='mx-4 cursor-pointer'> Your Collections</div> 
               </Link>
               <div className='mx-4 relative' > 
                    <div onClick={() => setShowUserMenu(!showUserMenu)}  className='cursor-pointer text-[#CED4DA] hover-pointer'> {user.name} </div>
                    {
                         showUserMenu ? <div className='absolute bg-white px-4 py-2 rounded-lg text-black w-48' >
                              <div onClick={() => logout()} className='w-full cursor-pointer'> Logout </div>
                              <Link passHref href="/collections"><div className='w-full cursor-pointer'> Your Collections </div></Link>
                         </div> : ''
                    }
               </div>   </>
          }
          </div>
     </div>;
}

export default Navigation;

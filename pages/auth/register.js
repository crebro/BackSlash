import Link from 'next/link';
import React, { useRef } from 'react';
import { registerUser } from '@api/requests/user';
import Navigation from '@components/Navigation';
import UnAuthenticatedRoute from '@components/UnAuthenticatedRoute';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from 'context/UserContext';
import toast from 'react-hot-toast';

function Regsiter() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [, , , setUser] = useContext(UserContext);

  const submitRegistration = () => {
    const usernameValue = usernameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    if (passwordValue && emailValue && usernameValue) {
      registerUser({username: usernameValue, email: emailValue, password: passwordValue}).then((response) => {
        if (response.user) {
          setUser(response.user);
          toast.success(response.message);
          localStorage.setItem('isAuthenticated', true);
        }
      })
    }
  }

  return <div className='w-screen h-screen bg-[#343A40]'>
      <Navigation />
      <div className='w-full h-full flex items-center justify-center absolute top-0 left-0'>
        <div className='flex flex-col justify-center'>
            <div className='text-white font-poppins text-3xl font-bold'>Register an Account</div>
            <div className='mt-4 text-sm text-white font-poppins font-bold'> Username </div>
            <input ref={usernameRef} className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm' type="text" placeholder='johndoe' />
            <div className='mt-4 text-sm text-white font-poppins font-bold'> Email </div>
            <input ref={emailRef} className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm' placeholder='johndoe@gmail.com' type="email" />
            <div className='mt-2 text-sm text-white font-poppins font-bold'> Password </div>
            <input ref={passwordRef} className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm' type="password" />
            <button onClick={() => submitRegistration()} className='mt-4 py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold rounded-sm'> Register </button>

            <div className='flex mt-2'>
                <div className='text-[#CED4DA]'> Already have an account? </div> &nbsp;
                <Link passHref href="/auth/login"><div className='text-[#0085FF] cursor-pointer'> Login here </div></Link>
            </div>
        </div>
      </div>
  </div>;
}

export default function () {
  return <UnAuthenticatedRoute> <Regsiter/> </UnAuthenticatedRoute>
};

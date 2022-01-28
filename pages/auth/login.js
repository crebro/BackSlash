import { loginUser } from '@api/requests/user';
import UnAuthenticatedRoute from '@components/UnAuthenticatedRoute';
import { UserContext } from 'context/UserContext';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { useContext, useRef } from 'react/cjs/react.development';
import Navigation from '../../components/Navigation';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [, , , setUser] = useContext(UserContext);

  const submit = () => {
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (emailValue && passwordValue) {
      loginUser({email: emailValue, password: passwordValue}).then((response) => {
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
            <div className='text-white font-poppins text-3xl font-bold'>Login to Your Account</div>
            <div className='mt-4 text-sm text-white font-poppins font-bold'> Email </div>
            <input ref={emailRef} className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm' placeholder='johndoe@gmail.com' type="email" />
            <div className='mt-2 text-sm text-white font-poppins font-bold'> Password </div>
            <input ref={passwordRef} className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm' type="password" />
            <button onClick={() => submit()} className='mt-4 py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold rounded-sm'> Login </button>

            <div className='flex mt-2'>
                <div className='text-[#CED4DA]'> Don't have an account yet? </div> &nbsp;
                <Link href="/auth/register"><div className='text-[#0085FF] cursor-pointer'> Register here </div></Link>
            </div>
        </div>
      </div>
  </div>;
}

export default function () {
  return <UnAuthenticatedRoute> <Login/> </UnAuthenticatedRoute>;
};

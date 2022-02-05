import Link from 'next/link';
import React from 'react';
import styles from "../../../../styles/Home.module.css"

function HeroSection() {
  return <div className={`${styles['bottom-slant']} bg-[#343A40] pt-10 pb-20 flex items-center justify-center`}>
    <div className='text-white mx-8'>
          <div className='font-poppins font-black text-5xl'> Fuel Your Stream</div>
          <div className='font-nunito' className="text-lg"> with free to use and customizable streaming elements</div>
          <Link passHref href="/explore"><button className='rounded-sm mx-2 font-fira-code bg-[#702EFD] px-4 py-2 text-2xl mt-3'> Begin </button></Link>
          <Link passHref href="/auth/register"><button className='rounded-sm mx-2 font-fira-code bg-[#2a61bf] px-4 py-2 text-2xl mt-3'> Login </button></Link>
          <div className='font-fira-code text-[#CED4DA] mt-2'> chats, games, polls, donations and more!</div>
    </div>
    <img src="/assets/images/rocket_illustration.png" className='w-80 h-80 mx-8' />
  </div>;
}

export default HeroSection;

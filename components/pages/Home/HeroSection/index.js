import Link from 'next/link';
import React from 'react';
import styles from "../../../../styles/Home.module.css"

function HeroSection() {
  return <div className={`${styles['bottom-slant']} bg-[#343A40] pt-10 pb-20 flex flex-col-reverse md:flex-row items-center justify-center `}>
    <div className='text-white mx-8'>
          <div className='font-poppins font-black text-4xl sm:text-5xl'> Fuel Your Stream</div>
          <div className='font-nunito text-lg'> with free to use and customizable streaming elements</div>
          <Link passHref href="/explore"><button className='rounded-sm mr-2 font-fira-code bg-[#702EFD] px-4 py-2 text-md sm:text-2xl mt-3'> Begin </button></Link>
          <Link passHref href="/auth/register"><button className='rounded-sm mr-2 font-fira-code bg-[#2a61bf] px-4 py-2 text-md sm:text-2xl mt-3'> Login </button></Link>
          <div className='font-fira-code text-[#CED4DA] mt-2'> chats, games, polls, donations and more!</div>
          <Link href="https://youtu.be/3AWyk9qckNc" >
            <a target="_blank" rel={'noreferrer'}>
              <div className='font-fira-code text-[#CED4DA] mt-4 underline cursor-pointer'>
                Not sure where to get started? 
              </div>
            </a>
          </Link>
    </div>
    <img src="/assets/images/rocket_illustration.png" className='w-60 h-60 sm:w-80 sm:h-80 mx-8' />
  </div>;
}

export default HeroSection;

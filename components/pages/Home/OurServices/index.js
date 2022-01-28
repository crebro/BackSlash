import React from 'react';
import styles from "../../../../styles/Home.module.css"
import Service from './widgets/Service';

function OurServices() {
  return <div className={`${styles['parallelogram']} bg-[#343A40] py-28 flex flex-col items-center justify-center w-screen text-white`}>
      <div className='text-5xl font-poppins font-black'> Our Offerings </div>
      <div className='text-xl font-nunito'> We try to provide you with the best streaming elements all in one place</div>
      <div className='flex items-center justify-center mt-4'>
        <Service name={"Chats"} image={"/assets/images/services/chat.png"} description={"Highly customizable chats for your stream and better interaction"} />
        <Service name={"Games"} image={"/assets/images/services/games.JPG"} description={"Play games with your chat, and boost the interactivity"} />
        <Service name={"Polls"} image={"/assets/images/services/polls.png"} description={"Allow chat to control what you do on stream, with customizable polls"} /> 
      </div>
  </div> 
}

export default OurServices;

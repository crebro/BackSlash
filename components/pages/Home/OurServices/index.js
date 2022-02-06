import React from 'react';
import styles from "../../../../styles/Home.module.css"
import Service from './widgets/Service';

function OurServices() {
  return <div className={`${styles['parallelogram']} bg-[#343A40] py-28 flex flex-col items-center justify-center w-screen text-white`}>
    <div className='w-[80%] lg:w-[60%] xl:w-[50%] flex flex-col items-center justify-center'>

      <div className='text-4xl md:text-5xl font-poppins font-black'> Our Offerings </div>
      <div className='text-xl text-center font-nunito'> We try to provide you with the best streaming elements all in one place</div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4'>
        <Service name={"Chats"} image={"/assets/images/services/chat.png"} description={"Highly customizable chats for your stream and better interaction"} />
        <Service name={"Games"} image={"/assets/images/services/games.JPG"} description={"Play games with your chat, and boost the interactivity"} />
        <Service name={"Polls"} image={"/assets/images/services/polls.png"} description={"Allow chat to control what you do on stream, with customizable polls"} /> 
      </div>
    </div>
  </div> 
}

export default OurServices;

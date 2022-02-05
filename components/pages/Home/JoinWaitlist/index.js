import { developerActivation } from '@api/requests/user';
import Modal from '@components/Modal';
import { UserContext } from 'context/UserContext';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

function JoinWaitlist() {
  const [authenticated, user] = useContext(UserContext);
  const [answer, setAnswer] = useState(null);
  const [showDeveloperActivationModal, setShowDeveloperActivationModal] = useState(false);

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    setAnswer(value);
  }

  const submit = () => {
    if (!answer) {
      toast.error("Please select an answer");
      return;
    }
    if (answer == "yes") {
      toast.error("Incorrect answer!, Sorry, developer activation could not be performed");
      setShowDeveloperActivationModal(false);
      return;
    }
    developerActivation().then((response) => {
      if (response.message) {
        toast.success(response.message);
      }
    })
  }

  return <div id='waitlist' className={`py-10 flex flex-col items-center justify-center w-screen focus:bg-slate-800`}>
      <div className='text-3xl font-poppins font-black'> Join us in this amazing journey </div>
      <div className='text-xl font-nunito mt-4'> Join our waitlist, we will provide you with the most of exclusive features if yo do</div>
      <input className='mt-4 py-2 px-4 w-1/2 lg:w-1/3 outline-none bg-[#C4C4C4] rounded-sm' placeholder='johndoe@gmail.com' />
      <button className='mt-2 py-2 px-4 w-1/2 lg:w-1/3 outline-none bg-[#702EFD] text-white font-fira-code rounded-sm'> Count me In! </button>
      { authenticated ? !user.is_developer ? <div onClick={() => setShowDeveloperActivationModal(true)} className='text-[#CED4DA] mt-4 cursor-pointer'>Click here for developer activation</div> : "" : ""}
      {
        showDeveloperActivationModal ? 
      <Modal> 
        <div className='text-xl font-poppins font-bold'> You found a secret modal! </div>
        <div className='text-sm'> Answer this qusetion to perform developer activation on your account! </div>
        <div className='text-lg'> Is HTML a programming language?</div>
        <div className='flex items-center justify-around mt-4'>
          <div><input className='form-radio' type="radio" name="qans" value={'yes'} onChange={(e) => handleAnswerChange(e)} /> <span> Yes </span> </div>
          <div><input className='form-radio' type="radio" name="qans" value={'no'} onChange={(e) => handleAnswerChange(e)} /> <span> No </span> </div>
        </div>
        <button onClick={() => submit()} className='w-full rounded-lg mt-4 py-2 px-4 outline-none bg-[#702EFD] text-white font-poppins font-bold' > Submit </button>
      </Modal> : ""
      }

  </div>;
}

export default JoinWaitlist;

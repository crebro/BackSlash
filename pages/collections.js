import AuthenticatedRoute from '@components/AuthenticatedRoute';
import { UserContext } from 'context/UserContext';
import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Collection from '../components/pages/Collections/Collection';

function Collections() {
  const [user] = useContext(UserContext);

  return <div className='min-w-screen min-h-screen bg-[#343A40] flex flex-col items-center' >
    <Navigation />
    <div className='lg:mt-10 xl:mt-20 lg:w-[80%] xl:w-[70%]'>
        <div className='flex items-center justify-between'>
            <div className='text-3xl font-poppins font-bold text-white'> Your Collections</div>
            <div className='cursor-pointer text-xl text-white px-4 py-2 bg-[#702EFD] rounded-sm font-bold'> Explore </div>
        </div>
        <div className='mt-4'>
            <Collection title={"The Customizable Chat"} description={"Customizable chats in your stream for more interactivity"} />
            <Collection title={"Good Looking Polls"} description={"Allow your chat to determine your choices in your livestream, by creating polls"} />
        </div>
    </div>
  </div>;
}

export default function () {return <AuthenticatedRoute><Collections /></AuthenticatedRoute> };

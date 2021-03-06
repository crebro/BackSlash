import { getUserWorkingTemplates } from '@api/requests/working_templates';
import AuthenticatedRoute from '@components/AuthenticatedRoute';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import CollectionItem from '../components/pages/Collections/CollectionItem';
import CardsDisplay from '@components/CardsDisplay';

function Collections() {
  const [workingTemplates, setWorkingTemplates] = useState([])

  useEffect(() => {
    getUserWorkingTemplates().then((response) => {
      setWorkingTemplates(response.data);
    })
  }, [])

  return <div className='min-w-screen min-h-screen bg-[#343A40] flex flex-col items-center' >
    <Navigation />
    <div className='mt-10 xl:mt-20 w-[95%] lg:w-[90%] xl:w-[70%]'>
        <div className='flex flex-col sm:flex-row items-center justify-between'>
            <div className='text-3xl font-poppins font-bold text-white'> Your Collections</div>
            <Link passHref href="/explore"><div className='mt-2 sm:mt-0 cursor-pointer text-xl text-white px-4 py-2 bg-[#702EFD] rounded-sm font-bold'> Explore </div></Link>
        </div>
        <div className='mt-4'>
          <CardsDisplay>
            {
              workingTemplates.map((workingTemplate) => {
                return <div key={workingTemplate.id}> <CollectionItem onDelete={() => setWorkingTemplates((prevData) => prevData.filter((wt) => wt.id != workingTemplate.id ))} onUpdate={(data) => setWorkingTemplates((prevData) => [{...workingTemplate, values: data}, ...prevData.filter((wt) => wt.id != workingTemplate.id)])} workingTemplate={workingTemplate} /> </div>
              }) 
            }
          </CardsDisplay>
        </div>
    </div>
  </div>;
}

export default function UserCollections () {return <AuthenticatedRoute><Collections /></AuthenticatedRoute> };

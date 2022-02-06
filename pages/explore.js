import { searchTemplates } from '@api/requests/templates';
import PreviewTemplate from '@components/pages/Explore/PrevivewTemplate';
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import CardsDisplay from '@components/CardsDisplay';

function ExploreTemplates() {
    const [searchTerm, setSearchTerm] = useState("");
    const [templates, setTemplates] = useState([]);

    const getTemplates = async () => {
        const response = await searchTemplates({query: searchTerm});
        if (response.data) {
            setTemplates(response.data);
        }
    }

    useEffect(() => {
        getTemplates();
    }, [])

  return <div className='min-w-screen min-h-screen bg-[#343A40] flex flex-col items-center' >
    <Navigation />
    <div className='mt-10 xl:mt-20 w-[95%] lg:w-[90%] xl:w-[70%]'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='text-3xl font-poppins font-bold text-white'> Explore Public Templates </div>
            <div className='flex mt-2 md:mt-0 items-center'>
                <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm w-full' placeholder='Search for templates' />
                <div className='cursor-pointer text-xl text-white px-4 py-2 bg-[#702EFD] rounded-sm font-bold'> Find </div>
            </div>
        </div>
        <div className='mt-4'>
            <CardsDisplay>
            {
                templates.map((template) => {
                    return <div key={template.id}><PreviewTemplate template={template} /> </div>
                })
            }
            </CardsDisplay>
        </div>
    </div>
  </div>;
}

export default ExploreTemplates;

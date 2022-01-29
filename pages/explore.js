import { searchTemplates } from '@api/requests/templates';
import PreviewTemplate from '@components/pages/Explore/PrevivewTemplate';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Navigation from '../components/Navigation';
import FlipMove from 'react-flip-move';
import AuthenticatedRoute from '@components/AuthenticatedRoute';

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
    <div className='lg:mt-10 xl:mt-20 lg:w-[80%] xl:w-[70%]'>
        <div className='flex items-center justify-between'>
            <div className='text-3xl font-poppins font-bold text-white'> Explore Public Templates </div>
            <div className='flex items-center'>
                <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className='py-2 px-4 outline-none bg-[#C4C4C4] rounded-sm w-full' placeholder='Search for templates' />
                <div className='cursor-pointer text-xl text-white px-4 py-2 bg-[#702EFD] rounded-sm font-bold'> Find </div>
            </div>
        </div>
        <div className='mt-4'>
            <FlipMove>
            {
                templates.map((template) => {
                    return <div key={templates.indexOf(template)}><PreviewTemplate template={template} /> </div>
                })
            }
            </FlipMove>
        </div>
    </div>
  </div>;
}

export default function () {return <AuthenticatedRoute> <ExploreTemplates /> </AuthenticatedRoute>};

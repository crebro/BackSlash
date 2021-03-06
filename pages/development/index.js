import { useEffect, useState } from "react";
import DeveloperRoute from '@components/DeveloperRoute';
import { getTemplates } from "@api/requests/templates";
import Template from "@components/pages/Development/Template";
import Navigation from "@components/Navigation";
import CardsDisplay from "@components/CardsDisplay";
import TemplateFormModal from "@components/pages/Development/TemplateFormModal";

function DeveloperTemplates() {
    const [showTemplateCreationModal, setShowTemplateCreationModal] = useState(false);
    const [templates, setTemplates] = useState([]);

    const getDeveloperTemplates = () => {
        getTemplates().then((response) => {
            if (response.values) {
                setTemplates(response.values);
            }
        })
    }

    useEffect(() => {
        getDeveloperTemplates();
    }, [])

  return <div className='min-w-screen min-h-screen bg-[#343A40] flex flex-col items-center'>
      <Navigation />
    <div className='mt-10 xl:mt-20 w-[95%] lg:w-[90%] xl:w-[70%]'>
        <div className='flex flex-col sm:flex-row items-center justify-between'>
            <div className='text-3xl font-poppins font-bold text-white'> Your Templates</div>
            <div onClick={() => setShowTemplateCreationModal(true)} className='mt-2 sm:mt-0 cursor-pointer text-xl text-white px-4 py-2 bg-[#702EFD] rounded-sm font-bold'> Create </div>
        </div>
        <div className='mt-4 w-full'>
            <CardsDisplay>
                {templates.map((template) => <div key={template.id}> <Template onTemplateUpdate={() => getDeveloperTemplates()} template={{...template}} /> </div>)}
            </CardsDisplay>
        </div>
    </div>
    {
        showTemplateCreationModal ? 
        <TemplateFormModal onTemplateSubmit={() => getDeveloperTemplates()} onModalClose={() => setShowTemplateCreationModal(false)} /> : ""
    }
  </div>;
}

export default function DevelopmentRoute () { return <DeveloperRoute><DeveloperTemplates/> </DeveloperRoute>};

import CardItem from '@components/CardsDisplay/widgets/CardItem';
import React, { useState } from 'react';
import { BsLink45Deg } from "react-icons/bs";
import UsageModal from './widgets/UsageModal';

function PreviewTemplate({template}) {
  const [showUsageModal, setShowUsageModal] = useState();

  return <div>
    <CardItem template={template}>
      <div onClick={() => setShowUsageModal(true)} className='bg-[#3f4246] w-40 text-sm flex px-4 py-2 justify-between items-center text-white rounded-sm cursor-pointer'> Use <BsLink45Deg/> </div>
    </CardItem>

    {
        showUsageModal ? <UsageModal template={template} onModalClose={() => setShowUsageModal(false)} /> : ""
    }
  </div>;
}

export default PreviewTemplate;


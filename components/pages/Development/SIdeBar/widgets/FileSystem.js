import { getTemplateFiles } from '@api/requests/templates';
import roughenFolder from '@utils/roughenFolder';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import DisplayDirectories from './DisplayDirectories';

function FileSystem({ onFileChange }) {
    const router = useRouter();
    const { template_identifier } = router.query;
    const [files, setFiles] = useState([]);

    useEffect(() => {
        getTemplateFiles(template_identifier).then((response) => {
            if (response) {
                const roughenedFiles = roughenFolder(response.files, [ template_identifier,  ...response.folders]);
                setFiles(roughenedFiles);
            }
        })
    }, []);

  return <div className='w-60 px-10 mt-4 text-white'> 
    <DisplayDirectories onFileChange={(fullpath) => onFileChange(fullpath) } listing={files} />
  </div>;
}

export default FileSystem;

import DeveloperRoute from '@components/DeveloperRoute';
import Editor from '@monaco-editor/react';
import React, { useEffect } from 'react';
import DevelopmentConsole from '@components/pages/Development/Console';
import DevelopmentNavigation from '@components/pages/Development/Navigation';
import ProjectPreview from '@components/pages/Development/ProjectPreview';
import SideBar from '@components/pages/Development/SIdeBar';
import { routes } from '@api/constants';
import { useRouter } from 'next/router';
import { useState } from 'react/cjs/react.development';
import { getRequest,} from '@api/requests';
import { updateTemplateFile } from '@api/requests/templates';
import useDebounce from '@utils/useDebounce';

var map = require('lang-map');

function Development() {
  const router = useRouter();
  const { template_identifier } = router.query;
  const [editorContent, setEditorContent] = useState();
  const [file, setCurrentFile] = useState(`${template_identifier}/index.html`);
  const debouncedContent = useDebounce(editorContent, 2000);
  const [updateIFrame, setUpdateIFrame] = useState(true);
  const [logValues, setLogValues] = useState([]);

  const getFileContents = async (file_name) => {
    const response = await getRequest(routes.getFileContents(file_name));
    const data = await response.text();
    setEditorContent(data);
  }

  const getFileExtension = (file_name) =>  {
    const fileSplit = file_name.split('.');
    if (fileSplit.length < 2) {
      return "text"
    }
    return fileSplit[fileSplit.length -1]
  }

  useEffect(() => {
    getFileContents(file);
  }, [file])

  useEffect(() => {
    if (debouncedContent) {
      updateTemplateFile(template_identifier, file, editorContent).then((response) => {
        setUpdateIFrame(!updateIFrame);
      })
    }
  }, [debouncedContent])

  return <div className='h-screen grid bg-[#343A40] overflow-y-hidden'>
    <DevelopmentNavigation />
    <div className='flex items-start h-full'>
      <SideBar onFileChange={(filepath) => setCurrentFile(filepath) } />
      <div className='w-full h-full relative'>
        <Editor onChange={(content) => setEditorContent(content)} theme="vs-dark" language={map.languages(getFileExtension(file))[0]} value={editorContent} loading={<div></div>} />
        <DevelopmentConsole logValues={logValues} />
      </div>
      <ProjectPreview onIframeLog={(value) => setLogValues([...logValues, value])} debouncedContent={updateIFrame} preview_location={routes.getTemplateLocation(template_identifier)} />
    </div>
  </div>;
}

export default function () { return <DeveloperRoute><Development/> </DeveloperRoute>};

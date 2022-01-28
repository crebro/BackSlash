import React from 'react';
import { useEffect, useRef } from 'react/cjs/react.development';
import { Hook, Unhook } from "console-feed"

function ProjectPreview({ preview_location, debouncedContent, onIframeLog }) {
  const iframeRef = useRef();

 useEffect(() => {
    Hook(
      iframeRef.current.contentWindow.console,
      (log) => onIframeLog(log),
      false
    )
    return () => Unhook(iframeRef.current.contentWindow.console)
  }, []) 

  useEffect(() => {
    iframeRef.current.src = 'about:blank';
    setTimeout(() => {
      iframeRef.current.src = preview_location;
    }, 10);
  }, [debouncedContent])

  return <div className='w-full h-full pt-5 px-4'>
      <div className='flex items-center text-white'>
        <div className='text-xs font-poppins'> Development Preview: </div> &nbsp;
        <div className='text-xs px-2 py-2 bg-[#C4C4C4] font-bold text-black'> {preview_location} </div>
      </div>
    <iframe ref={iframeRef} src={preview_location} className='w-full h-full my-2 mb-10 bg-white' />
  </div>;
}

export default ProjectPreview;

import React from 'react';
import {  AiFillFile} from 'react-icons/ai';
import { FcFolder } from 'react-icons/fc'

function DisplayDirectories({ listing, onFileChange }) {
  return <> {
      listing.map((item) => {
          if (item.isFolder) {
              return <div key={JSON.stringify(item)}> <div className='flex items-center'><FcFolder /> &nbsp; {item.name} </div>   <div className='ml-2'> <DisplayDirectories onFileChange={(filename) => onFileChange(filename)} listing={item.files} /> </div>  </div>
          }
          return <div onClick={() => onFileChange(item.fullpath)} key={JSON.stringify(item)} className='flex items-center'> <AiFillFile/> &nbsp; { item.name.length > 10 ? item.name.substring(0, 10) + "..." : item.name} </div>
      })
   } </>;
}

export default DisplayDirectories;

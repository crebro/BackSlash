import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { useState } from 'react/cjs/react.development';

function RequirementField({requirement, onChange, value }) {
    const [showHexColorPicker, setShowHexColorPicker] = useState(false);

    return <div  className='flex items-center relative'>
        <div className='w-full text-sm'> {requirement.key} { requirement.is_required ? <span className='text-red-600'> * </span> : "" }  </div>
        {  requirement.type === 'color' ? <div className='flex items-center w-full'> <button  onClick={() => setShowHexColorPicker(!showHexColorPicker)} className='py-1 my-1 text-sm px-4 outline-none rounded-sm w-full bg-[#c4c4c4]' > Toggle Color Picker</button> <div className='h-6 aspect-square' style={{backgroundColor: value ?? "#ffffff"}}> </div>  </div>  :
        <input defaultValue={value} onChange={(e) => onChange(e.target.value)} type={requirement.type === 'date' ? 'datetime-local' : 'text'} className='py-1 my-1 text-sm px-4 outline-none bg-[#C4C4C4] rounded-sm w-full' placeholder="Your Value Here" />  }
        { requirement.type === 'color' ? <div className={`${showHexColorPicker ? 'inline' : 'hidden'} absolute top-0 left-[100%] z-[100]`} > <HexColorPicker color={ value ?? "#ffffff" } onChange={onChange} />  </div>: '' }
    </div>;
}

export default RequirementField;

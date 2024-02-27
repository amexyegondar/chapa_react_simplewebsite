import React from 'react'

function Inputfield({type,id,placeholder,onchange}) {
  return (
   <>
          <label htmlFor={id}>{placeholder + ":  "}</label>
        <input type={type} id={id} placeholder={placeholder} onChange={onchange} className='w-80 h-10 font-bold font-sans text-purple-500 border-red-200  rounded-md p-3 text-sm'/>
        </>
  )
}

export default Inputfield

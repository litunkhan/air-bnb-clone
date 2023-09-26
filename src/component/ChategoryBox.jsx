import React from 'react'

 const ChategoryBox = ({ label, icon: Icon, selected }) => {
  return (
    <div
    className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${
          selected
            ? 'border-b-neutral-800 text-neutral-800'
            : 'border-transparent text-neutral-500'
        }
     
      `}
    >
        <Icon size={25}></Icon>
        <p className='text-[14px] font-medium'>{label}</p>
    </div>
  )
}

export default ChategoryBox

import React from 'react'
import { allcategories } from './allchategories'
import ChategoryBox from './ChategoryBox'

 const Chategories = () => {
  return (
    <div className='flex justify-between items-center overflow-x-auto pt-4 gap-4 mt-2'>
        {
            allcategories.map((item)=>{
                return <div>
                    <ChategoryBox label={item.label} icon={item.icon} key={item.label}/>
                </div>
            })
        }
    </div>
  )
}
export default Chategories
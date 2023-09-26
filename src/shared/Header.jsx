import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Login from '../component/Login'
const Header = () => {
  const[open,setOpen] = useState(false)
  const[show,setShow] = useState(false)
  return (
    <div className=''>
      <div className='border-b bg-white border-gray-300 py-1  w-full z-10 '>
    <div className='max-w-[1400px] mx-auto flex justify-between items-center p-4'>

<div className='w-[110px] hidden md:block'>
<img src={logo} alt="logo" className='w-full' />
</div>

 <div className='flex font-semibold gap-2 border border-gray-300 shadow-sm py-2
 pr-2 pl-7 rounded-full text-sm md:text-1xl items-center md:ml-14'>
     <p className='cursor-pointer'>Anywhere</p>
      <div className="border-l border-gray-300 w-[10px] h-[26px] mx-2"></div>
     <p className='cursor-pointer'>Any Week</p>
     <div className="border-l border-gray-300 mx-2 w-[10px] h-[26px]"></div>
     <p className='opacity-40 cursor-pointer'>Add guest</p>
     <button className='ml-2 bg-primary py-2 px-3 rounded-full'>
     <i className="fa-solid fa-magnifying-glass text-white "></i>
     </button>
 </div>

 <div className='flex justify-between items-center gap-4 cursor-pointer'>
   <button className= 'hidden md:block hover:bg-gray-100 py-1 px-2 rounded-full font-semibold text-1xl opacity-90'>
   Airbnb your home
   </button>
   <i className="fa-solid fa-globe text-xl hidden md:block"></i>

<div className='hidden md:block'>
   <div 
   onClick={()=>setOpen(!open)}
   className='border py-3 rounded-full px-6 flex items-center '>
   <i className="fa-solid fa-bars "></i>
   <i className="fa-solid fa-user md:ml-3 text-sm md:text-2xl "></i>
   </div>
   </div>    
 </div>
    </div>
    {open&&(
      <div className='absolute bg-white right-[6%] text-1xl top-[11%] shadow-md pt-5
      pl-8 pb-5 pr-20 border border-gray-300 flex flex-col justify-start items-start
      rounded-lg'>
          <button 
          onClick={()=>setShow(true)}
          className='font-semibold '>Sing Up</button>
          <button 
          onClick={()=>setShow(true)}
          className='my-5' >Login</button>
          <div className='w-full border border-gray-200 relative'></div>
          <button className='mt-4'>Airbnb your home</button>
          <button className='mt-5'>Help Center</button>
      </div>
    )}
    </div>

   {show&&(
     <Login setShow={setShow}/>
   )}
    </div>
  )
}
export  default Header
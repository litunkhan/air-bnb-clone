import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../Authprovider/Authprovider'
 const Login = ({setShow}) => {
    const [login,setLogin] = useState(false)
    const {user,googleLogin,loader} = useContext(AuthContext)

    const googleLoginhandle = ()=>{
      googleLogin()
     .then(res=>{
        console.log(res.user)
        console.log(user)

     })
     .catch(err=>{
      console.log(err.message)
     })
    }
  return (

    <div className='max-w-[600px] mx-auto border 
    border-gray-300 overflow-auto h-[650px] shadow-lg py-6 rounded-lg'>

     
      <div className='border-b border-gray-300 w-full '>
      <div className=' max-w-[430px] pl-4 pb-6 flex justify-between items-center'>
      <i
      onClick={()=>setShow(false)}
       class="fa-solid fa-xmark hover:bg-gray-100 py-2 px-4 rounded-full
      cursor-pointer font-semibold text-xl opacity-90"></i>
        <p className='text-[22px] text-center font-semibold'>Log in or sign up</p>
      </div >
      </div>

    {login?(
        <form className='flex flex-col px-4 gap-4 my-5'>
        <h2 className='text-3xl font-semibold'>Welcome to Airbnb</h2>
          <input className='border border-gray-300 outline-none p-4 rounded-lg' type="email" placeholder='@type your email' />
          <input 
          className='border border-gray-300 outline-none p-4 rounded-lg'
           type="text" placeholder='type your password' />
           <p className='my-2 pl-4 cursor-pointer'
           onClick={()=>setLogin(false)}>Dont have an account? Register</p>
           <button type='submit' className='bg-primary text-white text-2xl py-3 rounded-lg'>Login</button>
       </form>
    ):(
        <form className='flex flex-col px-4 gap-4 my-5'>
        <h2 className='text-3xl font-semibold'>Welcome to Airbnb</h2>
          <input className='border border-gray-300 outline-none p-4 rounded-lg' type="email" placeholder='@type your email' />
          <input 
          className='border border-gray-300 outline-none p-4 rounded-lg'
           type="text" placeholder='type your password' />
           <input 
          className='border border-gray-300 outline-none p-4 rounded-lg'
           type="text" placeholder='Confirt passwod' />
           <p className='my-2 pl-4 cursor-pointer'
           onClick={()=>setLogin(true)}> have an account? Login</p>
           <button type='submit' className='bg-primary text-white text-2xl py-3 rounded-lg'>
            Register
           </button>
       </form>
    )}

     <p className='my-2 text-center'>Or</p>
      <div className='px-5 mt-6'>
     
      <div className='border border-gray-300 my-5 p-2 rounded-xl hover:bg-slate-300'>
      <div className='w-full md:max-w-[430px] cursor-pointer flex items-center justify-between pl-6
       '>
      <i className="fa-brands fa-facebook text-4xl text-[#0866FF]"></i>
      <p className='font-semibold text-xl'>
    Continue with Facebook
      </p>
      </div>
      </div>

      <div className='border  border-gray-300 my-5 p-2 rounded-xl hover:bg-slate-300'>
      <div className='max-w-[430px] cursor-pointer flex items-center justify-between pl-6
      '>
      <i className="fa-brands fa-google text-4xl"></i>
      <p className='font-semibold text-xl'
      onClick={googleLoginhandle}>
    Continue with Google
      </p>
      </div>
      </div>

      <div className='border border-gray-300 my-5 p-2 rounded-xl hover:bg-slate-300'>
      <div className='max-w-[430px] cursor-pointer flex items-center justify-between pl-6
      '>
      <i className="fa-brands fa-apple text-4xl"></i>
      <p className='font-semibold text-xl'>
    Continue with Apple
      </p>
      </div>
      </div>
      </div>
   </div>
  )
}
export default Login
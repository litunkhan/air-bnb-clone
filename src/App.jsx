import React from 'react'
import Header from './shared/Header'
import { Outlet } from 'react-router-dom'
import Footer from './shared/Footer'

const App = () => {
  return (
    <>
    <Header/>
   <div className='min-h-[80vh]'>
   <Outlet/>
   </div>
    <Footer/>
    </>
  )
}

export default App 

import React from 'react'
import { HashLoader } from 'react-spinners'
 const Loader = () => {
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center'>

        <HashLoader size={50} color='#FF496A'/>
    </div>
  )
}

export default Loader

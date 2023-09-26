import React, { useEffect, useState } from 'react'
import Container from '../Container'

 const Rooms = () => {
    const [rooms,setRooms] = useState([])
    useEffect(()=>{
      fetch('./rooms.json')
      .then(res=>res.json())
      .then(res=>{
        setRooms(res)
      })
    },[])
    console.log(rooms)
  return (
    <Container>
        <div className='grid mt-10 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
         {
            rooms.map(singleroom=>{
                return <div className='cursor-pointer' >
                    <img src={singleroom.image} alt="location-image" className='h-[250px]
                    w-full rounded-lg'/>
                    <div className='flex justify-between items-center'>
                    <p className='my-1 font-bold'>{singleroom.location}</p>
                    <div className='flex items-center'>
                    <i className="fa-solid fa-star"></i>
                    <p className='my-1 font-bold'>{singleroom.rating}/5</p>
                    </div>
                    </div>
                    <p>{singleroom.dateRange}</p>
                    <p>Night: ${singleroom.price}</p>
                </div>
            })
         }
        </div>
    </Container>
  )
}

export default Rooms

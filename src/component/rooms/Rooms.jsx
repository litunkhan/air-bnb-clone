import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Loader from '../../Loader/Loader'
import { Link, useSearchParams } from 'react-router-dom'
import HeartButton from '../Button/HeartButton'

 const Rooms = () => {
  const [params,serParams] = useSearchParams()
  const category = params.get('category')
    const [rooms,setRooms] = useState([])
    const [loader,setLoader] = useState(true)
    useEffect(()=>{
      fetch('./rooms.json')
      .then(res=>res.json())
      .then(res=>{
        if(category){
          const filteredRooms = res.filter(room=> room.category===category)
          setLoader(false)
         return setRooms(filteredRooms)
        }
        else{
          setRooms(res)
          setLoader(false)
        }
        

      })
    },[category])
   
    if(loader){
      return <Loader/>
    }
  return (

    <Container>
      
      {rooms && rooms.length>0? <div className='grid mt-10 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
         {
            rooms.map((singleroom,i)=>{
                return <Link to={`/room/${singleroom.id}`} key={singleroom.id}>
                <div className='cursor-pointer relative' >
                    <div className='overflow-hidden rounded-lg'>
                    <img src={singleroom.image} alt="location-image" className='h-[250px]
                    w-full rounded-lg hover:scale-105 duration-500'/>
                    </div>
                    <div className='absolute top-3 right-3'>
                     <HeartButton />
                      </div>
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
                </Link>
            })
          }
        </div>:<div className='text-center mt-10 font-semibold text-4xl'>No Rooms Avaiable Now </div>}
    </Container>
  )
}

export default Rooms

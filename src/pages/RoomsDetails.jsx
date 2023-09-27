import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import RoomInfo from '../component/rooms/RoomInfo';
import RoomReservation from '../component/rooms/RoomReservation';

const RoomsDetails = () => {
  const [singleRoom, setSingleRoom] = useState(null);
  const [loader, setLoader] = useState(true);
const{id} = useParams()

  useEffect(() => {
    fetch('/rooms.json')
    .then(res=>res.json())
    .then(data=>{
        const single = data.find(room => room.id == id);
         setSingleRoom(single)
         setLoader(false)
    })
      
    
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
console.log(singleRoom)
  return (
    <div className='max-w-[1000px] mx-auto mt-10'>
      {loader && <div><Loader/></div>}

      {singleRoom && (
        <div>
        <div className='mb-5 flex flex-col gap-1'>
           <h3 className='text-2xl font-bold'>{singleRoom.location}</h3>
           <p className='text-gray-500'>{singleRoom.dateRange}</p>
        </div>
        <img className='object-cover h-[380px] w-full rounded-lg' src={singleRoom.image} alt="room-image" />
       <div className='mt-6 flex justify-between flex-col md:flex-row md:gap-10'>
      <div className='md:w-1/2'>
      <RoomInfo/>
      </div>
      
       <div className='md:w-1/2'>
       <RoomReservation/>
      </div>
      
      </div>
      </div>
      )}
    </div>
  );
};

export default RoomsDetails;


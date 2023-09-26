import React from 'react'
import Chategories from '../component/Chategories'
import Container from '../component/Container'
import Rooms from '../component/rooms/Rooms'

 const Homepage = () => {
  return (
    <div>
        <Container>
        <Chategories/>
        </Container>
        <Rooms/>
    </div>
  )
}
export default Homepage

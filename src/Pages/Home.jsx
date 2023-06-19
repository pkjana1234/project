import React from 'react'
import HomeCarousels from '../Homes/HomeCarousels'
import HomeServices from '../Homes/HomeServices'
import HomeAbout from '../Homes/HomeAbout'
import Testimonials from '../Homes/Testimonials'
import Booking from './Booking'
import Team from '../Homes/Team'
import Basicservice from '../Homes/Basicservice'
const Home = () => {

  return (
   <>   
   <HomeCarousels/>
   <Basicservice/>
   <HomeServices/>
   <HomeAbout/>
   <Booking/>
   <Testimonials/>
   <Team/>
   </>
  )
}

export default Home
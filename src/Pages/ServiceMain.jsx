import React from 'react'
import Booking from './Booking'
import Testimonials from '../Homes/Testimonials'
import HomeServices from '../Homes/HomeServices'
import ContactBanR from '../Components/Contact/ContactBanR'

const ServiceMain = () => {

  return (
    <>
      <ContactBanR />
      <HomeServices />
      <Booking />
      <Testimonials />
    </>
  )
}

export default ServiceMain
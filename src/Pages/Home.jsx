import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import AppFeatures from '../components/AppFeatures'
import Support_faq from '../components/Support_faq'
import AppInstructions from '../components/AppInstructions'
import SubNewsletter from '../components/SubNewsletter'  
import ClientTestimonials from '../components/ClientTestimonials'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <>
        <Hero/>
        <Brands/>
        <AppFeatures/>
        <Carousel/>
        <AppInstructions/>
        <ClientTestimonials/>
        <Support_faq/>
        <SubNewsletter/>    
    </>
  )
}

export default Home
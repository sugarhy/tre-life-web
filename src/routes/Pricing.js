import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PricingLessons from '../components/Pricing'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PRICING' text='Choose your sessions.'/>
            <PricingLessons />
            <Footer />
        </div>
    )
}

export default Pricing

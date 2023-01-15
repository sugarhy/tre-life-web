import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import ProviderInfo from '../components/Provider'

const provider = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TRE Provider' /> 
            <ProviderInfo />
            <Footer />
        </div>
    )
}

export default provider

import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSession from '../components/Training'
import TrainingExpl from '../components/Expl'

const training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TRE®란?' text='더 나은 삶의 여정을 TRE와 함께' /> 
            <TrainingSession embedID="26fLPiscUtY"/>
            <TrainingExpl />


            
            <Footer />
        </div>
    )
}

export default training

import React from 'react'
import './ProviderStyles.css'

import {Link} from 'react-router-dom'

import profile from '../assets/profile.png'
// import image1 from '../assets/img-1.jpg'
// import image4 from '../assets/img-4.jpeg'

const Provider = () => {
    return (
        <div className='provider'>
            <div className='middle'>
                <div className='img-container'>
                    <img src={profile} className ='img' width="300" height="300" alt=''/>
                </div>
            </div>

            <div className='left'>
                <h1> 박혜주</h1>
                <p>Certified TRE Provider, Founder of TRE Life</p>
                <p>국제공인 TRE 프로바이더로서 한국과 싱가포르에서 활동하고 있습니다. <br></br>
                다양한 백그라운드를 가진 한국인을 비롯한 전 세계 다국적 클라이언트들과 TRE를 진행하고 있습니다. </p> 
                <p>싱가포르 시니어 TRE 트레이너인 Michelle Beck 과 Meoh Ching Chong으로부터 훈련 받았으며
                2018년부터 현재까지 TRE 싱가포르 공인인증 자격과정 TRE 멘토로 참여해 오고 있습니다.</p>
                <p>◦ 국제공인 TRE 프로바이더 <br></br>
                ◦ Systemic Embodiment Coach <br></br>
                ◦ Meditation Teacher <br></br>
                ◦ Therapeutic Horticulturist
                </p>


                <p>스트레스나 트라우마로 힘들어하시는 분들께 최상의 TRE를 제공하기 위해 노력하고 있습니다. </p>
                <div className='proj'>
                    <h1>주요 참여 프로젝트:</h1>
                    
                        <p>     • 싱가포르 TRE프로바이더 자격과정 멘토 
                        <br></br>
                        • 고양시 주체 천 개의 마을 꿈 공동체 프로젝트 
                        <br></br>
                        • Philips Foundation 주관 Cancer Awareness TRE 프로젝트 
                        <br></br>
                        • Fresenius Medical Care Singapore 주관 TRE 프로젝트
                        <br></br>
                        • TRE for Hong Kong 프로젝트
                        <br></br>
                        • 직장인 대상 TRE in Tanjong Pagar, Singapore
                        <br></br>
                        • 민들레 심리상담소 협업 한국교민 대상 TRE워크샵 다수
                        <br></br>
                        • 우울증, 불면, 척추측만증, 만성피로, 감정조절 등 다양한 신체적, 감정적, 심리적 어려움을 겪고 있는 고객들과의 TRE 워크샵 및 세션</p> 
                    </div>
                
            

                <Link to='/contact'> <button className='btn'>Contact</button> </Link>
            </div>


            {/* <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={image1} className='img' alt='' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={image4} className='img' alt='' />
                    </div>
                </div>
            </div> */}
            
        </div>
    )
}

export default Provider

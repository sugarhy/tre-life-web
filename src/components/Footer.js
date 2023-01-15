import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaMailBulk, FaSearchLocation, FaPhone, FaMapMarker, FaMapMarkerAlt} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaMapMarkerAlt size={20} style={{color:'white', marginRight: '2rem'}}/>
                    {/* </div>
                    <div> */}
                        <h4>고양시 일산동구 마두 1동</h4>
                        {/* <h4>Gyeonggi Province, Republic of Korea</h4> */}
                    </div>

                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color:'white', marginRight: '2rem'}} /> 010-2619-6646</h4>
                    </div>

                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color:'white', marginRight: '2rem'}} /> heajoopark1970@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About TRE Life</h4>
                    <p>TRE®는 7가지 쉽고 간단한 운동을 통해 인간 모두가 갖고 태어난 '자율신경계의 반사적 떨림'을 활성화시켜
                        긴장된 근육을 이완시키고 이를 통해 신경계의 안정을 유도하는 스트레스 해소운동 입니다. <br></br>

                        TRE®의 자율신경계의 반사적 떨림을 통해 체내에 축적된 긴장이 해소되면,
                        우리의 뇌는 '안전'의 신호를 감지하고 스트레스 호르몬 분비를 멈추면서
                        본연의 안정감을 회복하게 됩니다.</p>
                    <div className='socials'>
                        <FaFacebook size={30} style={{color:'white', marginRight: '1rem'}}/>
                        <a href="https://www.instagram.com/tre_life_asia/"><FaInstagram size={30} style={{color:'white', marginRight: '1rem'}}/></a>
                        <a href= "https://www.youtube.com/@trelife5927/featured"><FaYoutube size={30} style={{color:'white', marginRight: '1rem'}}/></a>
                        <a href= "https://www.linkedin.com/in/hea-joo-park-543bb91b6/?originalSubdomain=kr"><FaLinkedin size={30} style={{color:'white', marginRight: '1rem'}}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

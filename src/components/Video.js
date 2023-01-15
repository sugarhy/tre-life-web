import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'
const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4'/>
            </video>
            <div className='content'>
                <h1>TRE® Life</h1>
                {/* <p>Trauma Release Exercise is an innovative series of exercises that assist 
                    the body in releasing deep muscular patterns of stress, 
                    tension and trauma.</p> */}
                    <p>인체는 스스로를 회복시키는 기능을 가지고 있습니다.
                        <br></br>TRE는 사람들이 회복능력을 사용하여 스스로 치유하도록 돕고 있습니다.
                        <br></br> - David Berceli, Creator of TRE®
                    </p>
            
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>참가신청하기</Link>
                </div>
            </div>
        </div>
    )
}

export default Video

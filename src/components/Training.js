import React from 'react'
import './TrainingStyles.css'
import PropTypes from "prop-types"

import trainingImg2 from '../assets/training3.jpeg'
import trainingImg from '../assets/training.jpeg'

const Training = ({embedID}) => {
    return (
        <div className='training'>
            <div className='left'>
                <div className='blockquote'>
                    <p>Tension, Trauma and Stress Releasing Exercises</p>
                </div>
                <div className="yt-video">
                    <iframe src={`https://youtube.com/embed/${embedID}`} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen title="Embedded Youtube" />
                </div>
                <p>TRE®는 7가지 쉽고 간단한 운동을 통해
                    인간 모두가 갖고 태어난 '자율신경계의 반사적 떨림'을 활성화시켜
                    긴장된 근육을 이완시키고 이를 통해 신경계의 안정을 유도하는 스트레스 해소운동 입니다.</p>

                <p>TRE®의 자율신경계의 반사적 떨림을 통해 체내에 축적된 긴장이 해소되면,
                우리의 뇌는 '안전'의 신호를 감지하고 스트레스 호르몬 분비를 멈추면서
                본연의 안정감을 회복하게 됩니다.</p>

                <p>TRE®는 신체적 운동일 뿐 아니라
                삼중구조로 이루어진 우리의 뇌를 통합해 조화롭게 사용할 수 있도록 도와주는 신경계(Neurologic) 운동이기도 합니다. </p>

                <p>TRE®는 누구나 쉽게 배울 수 있으며,혼자서도,가족이나 친구들과도 함께 할 수 있습니다.
                시간과 장소 무관하게 집에서 스스로 언제 어디서나 즐길 수 있는 운동 입니다.</p>

                <div className='blockquote'>
                    <p>The body knows how to restore itself</p>
                </div>
                <p>TRE®는 Dr.David Berceli에 의해 고안되어 미국 국방부를 비롯하여 소방, 경찰관을 비롯한 스트레스가 많은 직군에 사용된 바 있으며
                    현재 65개국 이상에서 스트레스/트라우마 치유를 위한 이완 기법으로 사용되고 있습니다.</p>
                <p>TRE®의 두 가지 핵심 요소는 안정화(grounding)와 자기 조절(self-regulation) 입니다.
                TRE®를 통해 두 가지 개념을 몸으로 익힐 수 있으며 스스로 안전하게 긴장을 해소해 회복탄력성을 되찾게 됩니다. </p>
                <p>국제공인 TRE®프로바이더 모두는 스트레스와 트라우마로 힘들어하는 분들에게 TRE® 워크샵이나 개인세션을 제공하고 있습니다.</p>
                
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={trainingImg} className='img' width="500px" alt='' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={trainingImg2} className='img' alt='' />
                    </div>
                </div>

                <div className='blockquote'>
                    <p>The body knows how to restore itself</p>
                </div>
                <div className="yt-video">
                    <iframe src={`https://youtube.com/embed/9NePsUkModA`} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen title="Embedded Youtube" />
                </div>
                <p>자율신경계의 떨림은 우리 몸 안에서 일어나는 자연스러운 떨림이기 때문에
                    바로 누운 자세, 불안정한 자세, isometric excercises등 다양한 방식을 통해 쉽게 유도될 수 있습니다. </p>

                <p> 우리 몸에는 central pattern generator라는 메카니즘이 존재하며 TRE®로 활성화된 자율신경계의 떨림은 
                    "cross talk"라 불리는 과정을 통해 척추의 위,아래로 퍼져 나가면서
                    우리 몸의 신경계는 각 부분을 다시 연결해 하나의 통합된 유기체로 바뀌어 나갑니다.</p>
                
            </div>            
        </div>

    )
}

Training.propTypes={
    embedID:PropTypes.string.isRequired
};

export default Training

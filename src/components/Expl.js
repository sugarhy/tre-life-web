import React from 'react'
import './ExplStyles.css'

import explImg from '../assets/spine.jpeg'
import explImg2 from '../assets/loop.jpeg'

const Expl = () => {
    return (
        <div className="paragraph">
            <div className="img-container">
                <img src={explImg} className="img" alt='' />
            </div>
            <p>우리 몸에는 central pattern generator라는 메카니즘이 존재하며 
                TRE®로 활성화된 자율신경계의 떨림은 "cross talk"라 불리는 과정을 통해 
                척추의 위,아래로 퍼져 나가면서 우리 몸의 신경계는 각 부분을 다시 연결해 하나의 
                통합된 유기체로 바뀌어 나갑니다.</p>

            <div className="img-container">
                <img src={explImg2} className="img" alt='' />
            </div>
            <p>신경생리학적으로 살펴보면
                central pattern generator가 있는 척추 끝부분에서 시작한 TRE®의 떨림은
                신체적 생존을 담당하는 뇌간(brain stem), 감정호르몬과 감정조절을 담당하는 감정의 뇌(limbic brain)를 지나
                우리의 인지를 담당하는 대뇌피질까지 도달하게 됩니다. </p>
            
            <p>(이 정보는 대뇌피질중 Intrinsic Connectivity Network 내의 salience network라고 불리우는 곳에서
                default network(refection)/central executive network (action)로 분류됩니다.) </p>

            <p>TRE의 자율신경계 떨림은 아래 그림에서 보듯 trans cortical loop라는 회로를 통해
                우리 몸의 신경정보를 뇌로 전달하고 전달된 정보를 우리 몸이 처리해 내도록 뇌에서 몸으로 다시 신호를 내보내는 과정을 수없이 반복합니다.</p>

            <p>TRE®는 이러한 신경계의 정보교류를 통해 우리 몸을 유기적으로 통합해 내는 과정 입니다.</p>
        </div>
    )
}

export default Expl

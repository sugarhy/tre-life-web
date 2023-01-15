import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>-One-Day Class-</h3>
                    <span className='bar'></span>
                    <p className='cost'>$25 per lesson</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='./contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>-Monthly-</h3>
                    <span className='bar'></span>
                    <p className='cost'>$20 per lesson</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='./contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>-Quarterly-</h3>
                    <span className='bar'></span>
                    <p className='cost'>$15 per lesson</p>
                    <p>- 3 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='./contact' className='btn'>Book</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Pricing

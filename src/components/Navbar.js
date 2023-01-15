import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const[click,setClick] = useState(false)
    const handleClick = () => setClick(!click) //not clicked as default

    const [color, setColor] = useState(false)
        const changeColor = ()=> {
            if(window.scrollY >= 100){
                setColor(true)
            } else{
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><h1>TRE Life</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/training'>TRE®란?</Link>
                </li>
                <li>
                    <Link to='/provider'>TRE PROVIDER</Link>
                </li>
                <li>
                    <Link to='/pricing'>CLASSES</Link>
                </li>               
                <li>
                    <Link to='/blogs'>BLOG</Link>
                </li>
                <li>
                    <Link to='/contact'>CONTACT</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {/* if hamburger-FaBars clicked, show the cross button-FaTimes. otherwise(:) show the hamburger menu*/ }
                {click ? (<FaTimes size={20} style={{color: "white"}} />) : (<FaBars size={20} style={{color: "white"}} />)}
            </div>
        </div>
    )
}

export default Navbar
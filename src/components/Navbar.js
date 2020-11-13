import React, {useState} from 'react';

//logo
import logo from '../img/e_kuku_icon.jpg';

//routing
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navigation-container">
            <Link to='/'>
            <img className='logo' src={logo} alt="logo"/>
            </Link>
            <ul className= { isOpen ? 'show-navLinks' : 'navLink-container'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/market' className='nav-link'>
                        Market
                    </Link>
                </li>
            </ul>
            <div className='navBtn-container'>
            <button
            onClick = {handleToggle} 
            className="nav-btn hide-btn"
            >
                <i className="fas fa-hamburger"></i>
            </button>
            <Link to='/cart'
                className="nav-btn">
                <i className="fas fa-shopping-cart"></i>
            </Link>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
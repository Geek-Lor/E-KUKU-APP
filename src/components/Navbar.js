import React, {useState} from 'react';
import logo from '../img/e_kuku_icon.jpg'

const Navbar = () => {
    const links = ['home', 'market'];

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navigation-container">
            <img className='logo' src={logo} alt="logo"/>
            <ul className= { isOpen ? 'show-navLinks' : 'navLink-container'}>
                {links.map((link, index) => 
                <li key={index} className='nav-item'>
                <a href='/' className='nav-link'>{link}</a>
                </li> )}
            </ul>
            <div className='navBtn-container'>
            <button
            onClick = {handleToggle} 
            className="nav-btn hide-btn"
            >
                <i class="fas fa-hamburger"></i>
            </button>
            <button className="nav-btn">
                <i class="fas fa-shopping-cart"></i>
            </button>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
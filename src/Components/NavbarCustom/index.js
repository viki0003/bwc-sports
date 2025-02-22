import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CompanyLogo from '../../Images/company_logo.png';
import CartIcon from '../../Assets/Icons/CartIcon';
import UserIcon from '../../Assets/Icons/UserIcon';
import HamburgerIcon from '../../Assets/Icons/HamburgerIcon';

const NavbarCustom = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(prev => !prev);
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-content">
                <Link to="/">
                    <img src={CompanyLogo} alt="Logo" className="navbar-logo" />
                </Link>
                <ul className={`nav-menu ${isMenuVisible ? 'visible' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/schedule">Group Schedule</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/coaches">Coaches</Link></li>
                    <li><Link to="/programs">School Programs</Link></li>
                    <li><Link to="/instructions">Instructions</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className="navbar-icons">
                    <CartIcon className="nav-icon" />
                    <UserIcon className="nav-icon" />
                    <HamburgerIcon className="nav-icon hamburger-icon" onClick={toggleMenu} />
                </div>
            </div>
        </nav>
    );
};

export default NavbarCustom;

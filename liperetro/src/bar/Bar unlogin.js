import React, { useState } from 'react';
import ButtonLogin from './Button-login';
import { Link } from 'react-router-dom';
import './Bar-unlogin.css';
import './Button.css';

function LRbar0() {

    const [click , setClick] = useState(false) ;

    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false) ;

    return (
        <nav className='LR-navbar'>
            <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet"/>
            <Link to='/home' className='navbar-logo-name'onClick={closeMobileMenu}>
                <img src={require('./logo name.png')} alt='Lipe Retro Logo'></img>
            </Link>
            <Link to='/home' className='navbar-logo-image'onClick={closeMobileMenu}>
                <img src={require('./logo80px.png')} alt='Lipe Retro Logo'></img>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-xmark' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu0 active' : 'nav-menu0'}>
                <li className='nav-item'>
                    <Link to='/home' className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/status0' className="nav-links" onClick={closeMobileMenu}>
                        Status
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/review0' className="nav-links" onClick={closeMobileMenu}>
                        Review
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/package' className="nav-links" onClick={closeMobileMenu}>
                        Package
                    </Link>
                </li>
            </ul>
            <ButtonLogin/>
        </nav>
    )
}

export default LRbar0;
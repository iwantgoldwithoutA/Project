import React, { useState } from 'react';
import ButtonLogout from './Button-logout';
import { Link } from 'react-router-dom';
import './Bar.css';
import './Button.css';
import ButtonLogin from './Button-login';

function LRbar() {

    const [click , setClick] = useState(false) ;

    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false) ;

    return (
        <nav className='LR-navbar'>
            <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet"/>
            <Link to='/' className='navbar-logo-name'onClick={closeMobileMenu}>
                <img src={require('./logo name.png')} alt='Lipe Retro Logo'></img>
            </Link>
            <Link to='/' className='navbar-logo-image'onClick={closeMobileMenu}>
                <img src={require('./logo80px.png')} alt='Lipe Retro Logo'></img>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-xmark' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/status' className="nav-links" onClick={closeMobileMenu}>
                        Status
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/review' className="nav-links" onClick={closeMobileMenu}>
                        Review
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/package' className="nav-links" onClick={closeMobileMenu}>
                        Package
                    </Link>
                </li>
                {localStorage.getItem("is_auth") ? (
                     <li className='nav-item'>
                     <Link to='/' className="nav-links-mobile" onClick={closeMobileMenu}>
                         Log out <i className='fas fa-right-from-bracket'/>
                     </Link>
                 </li>
                ):(<> </>)}
               
            </ul>
            {localStorage.getItem("is_auth") ? (
                <>
                     <li className='nav-item-user'>
               
                     <div>
                         {localStorage.getItem("UsernameDP")} <i className="fas fa-user"/>
                     </div>
                 </li>
                 <ButtonLogout/>
                 </>
                 
                    ):(
                 <ButtonLogin/> 
                 ) 
                }
        </nav>
    )
}

export default LRbar;

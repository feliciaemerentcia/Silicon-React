import React, { useState } from 'react'
import logoType from '../assets/Images/Silicon-logotype.svg'
import {Link, NavLink } from 'react-router-dom'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

  return (
    <header>
            <nav className="navbar container">
                <Link className="logo" to="/">
                    <img src={logoType} alt="Silicon Logotype"/>
                    <p>Silicon</p>
                </Link>

                <button className="btn-mobile-menu" onClick={toggleMenu}>
                    <i className={menuOpen ? "fa-light fa-times" :"fa-light fa-bars"}></i>
                </button>
                <ul className={`main-menu ${menuOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Features</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/contactPage"onClick={() => setMenuOpen(false)}>Contact</NavLink>
                    </li>
                </ul>

                <div className='darkmode'>
                    <DarkModeSwitch />
                </div>

                <a id="signin" href="#" className="btn-primary">
                    <i className="fa-regular fa-user"></i>
                    <span>Sign in / up</span>
                </a>
            </nav>
    </header>
  )
}

export default Header
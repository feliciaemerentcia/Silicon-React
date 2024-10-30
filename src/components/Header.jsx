import React from 'react'
import logoType from '../assets/Images/Silicon-logotype.svg'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <a href="index.html"><img src={logoType} alt="Silicon Logotype"/></a>
                <p>Silicon</p>
            </div>

            <nav className="navbar">
                <a className="nav-link" href="index.html">Features</a>
                <a className="nav-link" href="contact.html">Contact</a>
            </nav>

            <div className="darkmode-switch">
                <span className="label">Dark Mode</span>
                <label className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>

            <a id="signin" href="#" className="btn-primary">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </a>

            <button className="btn-mobile-menu">
                <i className="fa-light fa-bars"></i>
            </button>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import Btn_appStore from '../assets/Images/btn-appstore.svg'
import Btn_googlePlay from '../assets/Images/btn-googleplay.svg'
import iphone_myBudget from '../assets/Images/iphone-mybudget.svg'
import iphone_yourCards from '../assets/Images/iphone-yourcards.svg'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <h1 className="headline">Manage All Your Money in One App</h1>
            <div className="content">
                <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <div className="app-btn">
                    <a className="btn-download-app" href="#"><img src={Btn_appStore} alt="Download on the App Store"/></a>
                    <a className="btn-download-app" href="#"><img src={Btn_googlePlay} alt="Get it on Google Play"/></a>
                </div>
                <a href="#" className="discover-more"> 
                    <span className="chevron-btn">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>
                </a>
            </div>
            <div className="images">
                <img className="img-back" src={iphone_myBudget} alt="Iphone app my budget"/>
                <img className="img-front" src={iphone_yourCards} alt="Iphone app your cards"/>
            </div>
        </div>
    </section>
  )
}

export default Hero
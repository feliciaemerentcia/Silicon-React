import React from 'react'
import ContactImage from '../assets/Images/statistics-img.svg'

const Instructions_2 = () => {
  return (
    <div className="instructions-wrapper-2">
        <div className="images">
            <img src= {ContactImage} alt=""/>
        </div>
        <div className="content">
            <h3>Receive payment from international bank details</h3>
            <div className="text-grid">
                <div className="text-content">
                    <div className="feature-icon">
                        <img src="/Images/AppFeatures/icon-cashback.svg" alt=""/>
                    </div>
                    <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
                <div className="text-content">
                    <div className="feature-icon">
                        <img src="/Images/AppFeatures/icon-payments.svg" alt=""/>
                    </div>
                    <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
            </div>
            <button className="btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i> </button>
        </div>
    </div>
  )
}

export default Instructions_2
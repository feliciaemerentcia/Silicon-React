import React from 'react'
import StatisticsImage from '../assets/Images/statistics-img.svg'
import ContactImage from '../assets/Images/contacts-img_2.svg'

const Instructions_1 = () => {
  return (
    <div className="instructions-wrapper-1">
        <div className="content">
            <h3>Make your money transfer simple and clear</h3>
            <div className="check-text">
                <i className="fa-regular fa-circle-check"></i>
                <p>Banking transactions are free for you</p>
            </div>
            <div className="check-text">
                <i className="fa-regular fa-circle-check"></i>
                <p>No monthly cash commission</p>
            </div>
            <div className="check-text">
                <i className="fa-regular fa-circle-check"></i>
                <p>Manage payments and transactions online</p>
            </div>
            <button className="btn-primary">Learn more <i className="fa-solid fa-arrow-right"></i> </button>
        </div>
        <div className="images">
            <img className="img-back" src={StatisticsImage} alt=""/>
            <img className="img-front" src={ContactImage} alt=""/>
        </div>
    </div>
  )
}

export default Instructions_1
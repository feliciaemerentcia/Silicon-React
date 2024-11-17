import React from 'react'
import TelephoneIcon from '../assets/Images/icon-telephone.svg'
import MessageIcon from '../assets/Images/icon-message.svg'
import {Link} from 'react-router-dom' 

const Support = () => {
  return (
    <div>
        <div className="support-grid">
            <div className="support-item">
                <img src={TelephoneIcon} alt="Phone icon"/>
                <p>Still have questions?</p>
                <Link id="phone-link" className="contact-link" to="/contactPage">Contact us <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="support-item">
                <img src={MessageIcon} alt="Message icon"/>
                <p>Don't like phone calls?</p>
                <Link id="message-link" className="contact-link" to="/ContactPage">Contact us <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
        <div className="contact-btn">
            <button className="btn-primary">Contact us now</button>
        </div>
    </div>
  )
}

export default Support
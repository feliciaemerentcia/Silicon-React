import React from 'react'
import { Link } from 'react-router-dom'
import ConsultationForm from './ConsultationForm'


const ContactUs = () => {
  return (
    <section id='contact'>
        <div className='container'>
            <div className='breadcrumb-links'>
                <p><i className="fa-light fa-house"></i> Homepage</p>
                <i className="fa-light fa-chevrons-right"></i>
                <p className='link-contact'>Contact</p>
            </div>
            <h2>Contact Us</h2>
            <div className='contact-wrapper'>
                <div className='contact-grid'>
                    <div className="contact-icon">
                        <i className="fa-light fa-envelope"></i>
                    </div>
                    <div className="text-content">
                        <h5>Email us</h5>
                        <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                        <Link className="contact-link" to="/ContactPage">Leave a message <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className='contact-grid'>
                    <div className="contact-icon">
                        <i className="fa-solid fa-user-group"></i>
                    </div>
                    <div className="text-content">
                        <h5>Careers</h5>
                        <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                        <Link className="contact-link" to="/ContactPage">Send an application <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <ConsultationForm/>
        </div>
    </section>
  )
}

export default ContactUs
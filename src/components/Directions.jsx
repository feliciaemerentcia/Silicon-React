import React from 'react'
import map from '../assets/Images/map-img.svg'

const Directions = () => {
  return (
    <section id='directions'>
        <div className='container'>
            <img className='map' src={map} alt="map"/>
            <div className='directions'>
                <div className='adresses'>
                    <div className='locations'>
                        <h5>Medical Center 1</h5>
                        <p><i className="fa-regular fa-location-dot location-icon"></i> 4517 Washington Ave. Manchester, Kentucky 39495</p>
                        <p><i className="fa-solid fa-phone-volume location-icon"></i>(406) 555-0120</p>
                        <p><i className="fa-regular fa-clock location-icon"></i> Mon – Fri: 9:00 am – 22:00 am</p>
                        <p>Sat – Sun: 9:00 am – 20:00 am</p>
                    </div>
                    <div className='locations'>
                        <h5>Medical Center 2</h5>
                        <p><i className="fa-regular fa-location-dot location-icon"></i> 2464 Royal Ln. Mesa,New Jersey 45463</p>
                        <p><i className="fa-solid fa-phone-volume location-icon"></i>(406) 544-0123</p>
                        <p><i className="fa-regular fa-clock location-icon"></i> Mon – Fri: 9:00 am – 22:00 am</p>
                        <p>Sat – Sun: 9:00 am – 20:00 am</p>
                    </div>
                </div>
                <div className='socialmedia-icons'>
                    <i className="fa-brands fa-square-facebook socialmedia-icon"></i>
                    <i className="fa-brands fa-twitter socialmedia-icon"></i>
                    <i className="fa-brands fa-instagram socialmedia-icon"></i>
                    <i className="fa-brands fa-youtube socialmedia-icon"></i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Directions
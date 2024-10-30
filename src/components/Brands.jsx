import React from 'react'
import Brand_1 from '../assets/Images/brand-1.svg'
import Brand_2 from '../assets/Images/brand-2.svg'
import Brand_3 from '../assets/Images/brand-3.svg'
import Brand_4 from '../assets/Images/brand-4.svg'
import Brand_5 from '../assets/Images/brand-5.svg'
import Brand_6 from '../assets/Images/brand-6.svg'

const Brands = () => {
  return (
    <section id="brands">
        <div className="container">
            <div id="brand-1" className="brand-box">
                <img src={Brand_1} alt="brand logo"/>
            </div>
            <div id="brand-2" className="brand-box">
                <img src={Brand_2} alt="brand logo"/>
            </div>
            <div id="brand-3" className="brand-box">
                <img src={Brand_3} alt="brand logo"/>
            </div>
            <div id="brand-4" className="brand-box">
                <img src={Brand_4} alt="brand logo"/>
            </div>
            <div id="brand-5" className="brand-box">
                <img src={Brand_5} alt="brand logo"/>
            </div>
            <div id="brand-6" className="brand-box">
                <img src={Brand_6} alt="brand logo"/>
            </div>
        </div>
</section>
  )
}

export default Brands
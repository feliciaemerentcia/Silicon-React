import React from 'react'
import iphoneCarousel_1 from '../assets/Images/Carousel_1.svg'
import iphoneCarousel_2 from '../assets/Images/Carousel_2.svg'
import iphoneCarousel_3 from '../assets/Images/Carousel_3.svg'

const Carousel = () => {

  return (
    <section id="carousel">
        <div class="container">
            <h2>How Does It Work?</h2>
            <div class="instructions-img">
                <img class="tablet-img" src={iphoneCarousel_2} alt=""/>
                <img class="" src={iphoneCarousel_1} alt=""/>
                <img class="tablet-img" src={iphoneCarousel_3} alt=""/>
            </div>
            <h4 class="desktop-text">Latest transaction history</h4>
            <h4 class="tablet-text">Step 3. Transfers to people from your contact list</h4>
            <h4 class="mobile-text">Transfers to people from your contact list</h4>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
        </div>
    </section>
  )
}

export default Carousel
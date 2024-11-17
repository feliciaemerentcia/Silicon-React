import React from 'react'
import StarRating from './StarRating'

const Testimonial = ({item}) => {
  return (
    <div className="testimonials">
        <i className="fa-sharp fa-solid fa-quote-left quote"></i>
        <StarRating starRating={item.starRating}/>
        <p>{item.comment}</p>
        <div className="user">
            <img src={item.avatarUrl} alt={item.author}/>
            <div>
                <p className="name">{item.author}</p>
                <p>{item.jobRole}</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
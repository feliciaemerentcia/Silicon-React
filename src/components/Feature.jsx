import React from 'react'

const Feature = ({feature}) => {
  return (
    <div className="feature-wrapper">
        <div className="feature-icon">
            <img src={feature.img} alt=""/>
        </div>
        <div className="text-content">
            <h5>{feature.title}</h5>
            <p>{feature.text}</p>
        </div>
    </div>
  )
}

export default Feature
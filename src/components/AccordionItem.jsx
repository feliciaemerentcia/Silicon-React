import React, { useState } from 'react'

const AccordionItem = ({item}) => {

    const [isOpen, setIsOpen] = useState(false)

    const ToggleQuestion = () => {
        setIsOpen (!isOpen)
    }

  return (
    <div className="faq-card">
        <div className={`question ${isOpen ? 'open' : ''}`} onClick={ToggleQuestion}>
            <p>{item.title}</p>
            <button className={`chevron-btn ${isOpen ? 'open' : ''}`}>
                <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </button>
        </div>
        {isOpen && (
                <div className="answer open"><p>{item.content}</p></div>
            )}
    </div>
  )
}

export default AccordionItem
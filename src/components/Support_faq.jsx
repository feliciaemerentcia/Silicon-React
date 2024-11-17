import React, { useState, useEffect } from 'react'
import Support from './Support'
import FaqHeadline from './FaqHeadline'
import AccordionItem from './AccordionItem'

const Support_faq = () => {
  const [faq, setFaq] = useState ([])

  const fetchFaq = async () => {
    const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq')
    const data = await res.json()
    setFaq(data)
  }

  useEffect(() => {
    fetchFaq ()
  }, [])

  return (
    <section id="support-and-faq">
        <div className="container">
            <FaqHeadline/>
            <Support/>
            <div className='FAQ'>
              {faq.map(item => (
                <AccordionItem key={item.id} item={item}/>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Support_faq
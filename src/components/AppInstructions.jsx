import React from 'react'
import Instructions_1 from './Instructions_1'
import Instructions_2 from './Instructions_2'

const AppInstructions = () => {
  return (
    <section id="app-instructions">
        <div className="container">
            <Instructions_1/>
            <Instructions_2/>
        </div>
    </section>
  )
}

export default AppInstructions
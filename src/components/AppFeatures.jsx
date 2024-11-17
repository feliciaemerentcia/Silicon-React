import React, {useState} from 'react'
import Feature from './Feature'

const AppFeatures = () => {
    const [features, setFeatures] = useState([
        { img: "./Images/AppFeatures/icon-payments.svg", title: "Easy Payments", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, ratione?" }, 
        { img: "./Images/AppFeatures/icon-security.svg", title: "Data Security", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nemo!" }, 
        { img: "./Images/AppFeatures/icon-statistics.svg", title: "Cost Statistics", text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, alias." }, 
        { img: "./Images/AppFeatures/icon-support.svg", title: "Support 24/7", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ratione?" }, 
        { img: "./Images/AppFeatures/icon-cashback.svg", title: "Regular Cashback", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, asperiores." }, 
        { img: "./Images/AppFeatures/icon-happy.svg", title: "Top Standards", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, maiores." }, 
    ])

  return (
    <section id="app-features">
        <div className="container">
            <div className="img-container">
                <img src="./Images/AppFeatures/iphone-features.svg" alt=""/>
            </div>
            <div className="text-container">
                <div className="headline">
                    <h2>App Features</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, aspernatur a dolores dolorem quibusdam quia, eligendi eveniet quasi cumque odit provident similique, fugit deleniti voluptatibus!</p>
                </div>
                <div className="feature-grid">
                    {
                        features.map((featureItem, index) => (<Feature key={index} feature={featureItem} />))
                    } 
                </div>
            </div>
        </div>
    </section>
  )
}

export default AppFeatures
import React from 'react'
import HeroBanner from '../img/intro-bg.png'

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container hero__container">
            <div className="hero__info">
                <h1 className="hero__info__title">
                    Freedom calls.
                </h1>
           <div className="hero__info__two">
            <div className="line"></div>
            <p className="hero__info__text">
                Answer a call from your surfboard. Ask Siri to send a message. Stream your favorite songs on your run. And do it all while leaving your phone behind. Introducing Apple Watch Series 3 with cellular. Now you have the freedom to go with just your watch.
            </p>
           </div>
                <a href="#" className="main-link">
                    Watch the keynote
                </a>
    
            </div>
        </div>
        <img src={HeroBanner} width="587px" alt="hero__img" className="hero__img" />
       </section>
       <hr />
    </>
  )
}

export default Hero
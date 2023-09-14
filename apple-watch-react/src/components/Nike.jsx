import React from 'react'
import NikeBanner from '../img/watch-in-hand.png'

function Nike() {
  return (
    <>
    <section className="nike">
            <div className="container nike__container">
                <div className="nike__info">
                    <h2 className="nike__title">
                        Nike Sport Band.
                        Light. Flexible.
                        Breathable.
                    </h2>
                   <div className="hero__info__two">
                    <div className="line active"></div>
                    <p className="nike__text">
                        Made from the same durable, lightweight fluoroelastomer as the original Apple Watch Sport Band, the Nike Sport Band reduces weight and improves ventilation via row after row of compression-molded perforations.
                    </p>
                   </div>
                    <a href="#" className="main-link">
                        Buy now
                    </a>
                </div>
                <img src={NikeBanner} alt="nike__img" className="nike__img" />
            </div>
        </section>
    </>
  )
}

export default Nike
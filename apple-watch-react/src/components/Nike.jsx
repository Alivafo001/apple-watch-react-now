import React from 'react'
import NikeBanner from '../img/watch-in-hand.png'
import Info from './Info'

function Nike() {
    const nikeInfo = {
        titleone: `Nike Sport Band.
        Light. Flexible.
        Breathable.`,
        textone: 'Made from the same durable, lightweight fluoroelastomer as the original Apple Watch Sport Band, the Nike Sport Band reduces weight and improves ventilation via row after row of compression-molded perforations.',
        linkone: 'Buy now',
    }
  return (
    <>
    <section className="nike">
            <div className="container nike__container">
                <Info titleone={nikeInfo.titleone} textone={nikeInfo.textone} linkone={nikeInfo.linkone}  />
                <img src={NikeBanner} alt="nike__img" className="nike__img" />
            </div>
        </section>
    </>
  )
}

export default Nike
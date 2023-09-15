import React from 'react'
import RunnerFooter from '../img/runners 1.png'
import Info from './Info'

function Footer() {
    const footerInfo = {
        titletwo: 'Take control of your health.',
        texttwo: `With built-in GPS and altimeter, Apple Watch Nike+ has all the features to help you take your run to the next level. You can even pair your watch wirelessly with compatible gym equipment. And it’s swimproof, so you can take a post-run dip in the pool.`,
        linktwo: 'Explore features',
    }
  return (
    <>
     <footer className="your">
        <div className="container your__container">
            <Info titletwo={footerInfo.titletwo} texttwo={footerInfo.texttwo} linktwo={footerInfo.linktwo}/>
            {/* <div className="your__info">
                <h2 className="your__title">
                    Take control of your health. 
                </h2>
                <div className="your__info__two">
                    <div className="line activa"></div>
                    <p className="your__info__two__text">
                        With built-in GPS and altimeter, Apple Watch Nike+ has all the features to help you take your run to the next level. You can even pair your watch wirelessly with compatible gym equipment. And it’s swimproof, so you can take a post-run dip in the pool.
                    </p>
                </div>
                <a href="#" className="main-link">
                    Explore features
                </a>
            </div> */}
        </div>
    </footer>
    </>
  )
}

export default Footer
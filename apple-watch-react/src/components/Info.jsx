import React from 'react'
import BtnTwo from './BtnTwo'

function Info({title , text , link , titleone , textone , linkone , titletwo , texttwo , linktwo}) {
  return (
         <div className="hero__info">
            <h1 className="hero__info__title">{title} {titleone} {titletwo}</h1>
            <div className="hero__info__two">
              <p className="hero__info__text">
                {text} {textone} {texttwo}
              </p>
            </div>
            <BtnTwo>
                {link} {linkone} {linktwo}
            </BtnTwo>
    </div>
  )
}

export default Info
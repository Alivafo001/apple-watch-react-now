import React from 'react'
import HeaderLogo from '../img/Vector.svg'
import HeaderOpen from '../img/Group 3.svg'
import HeaderClose from '../img/Group.svg'

function Header() {
  return (
    <>
    <header className="header">
        <div className="container header__container">
            <a href="./index.html" className="header__logo">
                <img src={HeaderLogo} alt="header__logo" />
            </a>
            <button className="header__open">
                <img src={HeaderOpen} alt="banner" />
            </button>
            <nav className="nav active">
                <button className="header__close">
                    <img src={HeaderClose} alt="banner" /> 
                </button>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Offers
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Services
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link active">
                            How can we help you?
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header;
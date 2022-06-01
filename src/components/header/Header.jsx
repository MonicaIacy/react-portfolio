import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Oii, eu sou a</h5>
        <h1>Mônica Mendes</h1>
        <h5 className="text-light">FrontEnd Developer Junior</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

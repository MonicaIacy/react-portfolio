import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mônica Mendes</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Cursos</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/monicaiacy/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/MonicaIacy" target="_blank" rel='noreferrer'><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mônica Mendes. All rights reserved.</small>
      </div>
    </footer>
  )
}

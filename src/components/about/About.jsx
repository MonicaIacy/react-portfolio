import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {FiTarget} from 'react-icons/fi'
import {MdOutlinePublishedWithChanges} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiTarget className='about__icon'/>
              <h5>Determinação</h5>
              <small>apaixonada por aprender</small>
            </article>

            <article className='about__card'>
              <MdOutlinePublishedWithChanges className='about__icon'/>
              <h5>Transição de carreira</h5>
              <small>psico e desenvolvedora</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>projetos pessoais</small>
            </article>
          </div>

          <p>Eu sou uma pessoa que gosta de simplicidade, do que é prático e objetivo, mas que, ao mesmo tempo, não se contenta com viver uma vida sem aventuras, mudanças ou reviravoltas. E foi numa dessas reviravoltas que encontrei a programação e descobri que não precisava me contentar com uma vida que não me preenchia por completo, mas que podia levar um pouquinho do que eu era como psicóloga para o mundo do desenvolvimento. Afinal, nós construímos a tecnologia para servir pessoas, então nada melhor de que conhecer um pouco (ou bastante) dos dois.</p>

          <a href="#contact" className='btn btn-primary'>Vamos conversar?</a>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export default function Services() {
  return (
    <section id="services">
      <h5>Como eu estou aprendendo</h5>
      <h2>Cursos que já realizei ou estou realizando</h2>

      <div className="container services__container">


        <article className='service'>
          <div className="service__head">
            <h3>Competição Hiring Coders</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Competição internacional.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Projetos, desafios e provas.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Soft e Hard Skills.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Treinamento Fullstack: React, NodeJS, postgreSQL e outros.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Bootcamp TakeBlip Web Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lógica de programação.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Estrutura de dados.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Git e GitHub.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML5 e CSS3.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desafios de código em Javascript.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>MySQL.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Curso Web Moderno Completo - Cod3r</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frameworks e bibliotecas: React, NextJS, Angular 9 e VueJS.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Banco de dados relacional e não relacional.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Projetos práticos.</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

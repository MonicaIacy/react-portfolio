import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

export default function Experience() {
  return (
    <section id="experience">
      <h5>O que eu já aprendi e usei</h5>
      <h2>Minhas Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermediário</small>
                </div>
            </article>            
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__general">
          <h3>O que?</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Soft Skills</h4>
                <small className='text-light'>Resiliência e gestão do tempo</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Metodologias Ágeis</h4>
                <small className='text-light'>SCRUM e Kanban</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Boas práticas</h4>
                <small className='text-light'>em programação</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Inglês</h4>
                <small className='text-light'>Avançado</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className="experience__details-icon"/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import IMG4 from '../../assets/IMG4.png'
import IMG5 from '../../assets/IMG5.png'
import IMG6 from '../../assets/IMG6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Site Materno",
    github: "https://github.com/MonicaIacy/Site-Clinica-Materno",
    demo: "https://monicaiacy.github.io/Site-Clinica-Materno/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Projeto PicPro",
    github: "https://github.com/MonicaIacy/Projeto-picpro",
    demo: "https://monicaiacy.github.io/Projeto-picpro/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Site Ada Lovelace",
    github: "https://github.com/MonicaIacy/site_Ada_Lovelace",
    demo: "https://monicaiacy.github.io/site_Ada_Lovelace/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Interface Netflix",
    github: "https://github.com/MonicaIacy/Interface_Netflix",
    demo: "https://monicaiacy.github.io/Interface_Netflix/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Jogo Helicóptero",
    github: "https://github.com/MonicaIacy/Projeto-jogo-helicoptero",
    demo: "https://monicaiacy.github.io/Projeto-jogo-helicoptero/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Flash Card",
    github: "https://github.com/MonicaIacy/Flash-card",
    demo: "https://monicaiacy.github.io/Flash-card/"
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Meus projetos mais recentes</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank' rel='noreferrer'>Página</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

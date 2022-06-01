import React from 'react'
import './testimonials.css'
import testimonial1 from '../../assets/testimonial1.png'
import testimonial2 from '../../assets/testimonial2.png'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: testimonial1,
    name: 'Daniel Nordhausen',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus aspernatur qui, unde eligendi nemo.'
  },
  {
    avatar: testimonial2,
    name: 'Mahani',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus aspernatur qui, unde eligendi nemo.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

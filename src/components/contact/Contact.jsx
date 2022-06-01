import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hniirdy', 'template_34u5bkc', form.current, 'jb3ipNzfMfIbM92Ag')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Vamos conversar?</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>E-mail</h4>
            <h5>monicamendes81@yahoo.com</h5>
            <a href="mailto:monicamendes81@yahoo.com" target="_blank">Mande um e-mail</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>19 98241-2920</h5>
            <a href="https://wa.me/5519982412920" target="_blank">Mande uma mensagem aqui</a>
          </article>
        </div>
        {/*  END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='seu nome' required />
          <input type="email" name='email' placeholder='seu melhor e-mail' required />
          <textarea name="message" rows="7" placeholder='sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>

    </section>
  )
}

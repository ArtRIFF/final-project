import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const ContactInfoPage = () => {
  return (
    <section className='contact-info-section'>
      <div className='container'>
        <p className='contact-info-section__title'>1. Contact Information</p>

        <div className='contact-info-section__info'>
          <form action="" className='contact-info-section__infoEmail'>
            <label htmlFor="#" className='contact-info-section__email'>Email Address</label>
            <input type="text" className='contact-info-section__text' placeholder='elonamail@gmail' /></form>
        </div>
        <p className='contact-info-section__titleLogin'>Already have an account? <NavLink to="/login" className='contact-info-section__login'>Login</NavLink> </p>

      </div>
    </section>
    
  )
}
export default ContactInfoPage;
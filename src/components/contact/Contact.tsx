import React from 'react';
import LinkedInIcon from '../../assets/linkedin.png';
import EmailIcon from '../../assets/email.png';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id='contact'>
      <p className='section__text__p1'>Get in Touch</p>
      <h1 className='title'>Contact Me</h1>
      <div className='contact-info-upper-container'>
        <div className='contact-info-container'>
          <img
            src={EmailIcon}
            alt='Email icon'
            className='icon contact-icon email-icon'
          />
          <p>
            <a
              href='mailto:sujithdachepally24@gmail.com'
              className='contact-link'
            >
              sujithdachepally24@gmail.com
            </a>
          </p>
        </div>
        <div className='contact-info-container'>
          <img
            src={LinkedInIcon}
            alt='LinkedIn icon'
            className='icon contact-icon'
          />
          <p>
            <a
              href='https://www.linkedin.com/in/sujithdach/'
              className='contact-link'
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

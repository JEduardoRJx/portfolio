import React from 'react';
import './Contact.scss';
import Fade from 'react-reveal/Fade';
import ContactForm from '../4-contactform/ContactForm';
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import Resume from '../../images/resume.png'

const Contact = () => {
  return (
    <section className='contact-section'>
      
      <div className='form-links-wrapper'>
        <div className='contactform-wrapper'>
            <ContactForm />
        </div>

        </div>

    </section>
  );
}

export default Contact;
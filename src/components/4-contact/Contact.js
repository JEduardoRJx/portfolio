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

        <div className='links-wrapper'>
          <Fade bottom delay={200}>
           <a href="https://www.linkedin.com/in/jeduardorjx/"
              className='link'
              target="_blank"
              rel="noopener noreferrer">
                <img className='icon icon-margin'
                  src={Resume}
                  alt='linkedin icon' />
            </a>

            <a href="https://github.com/JEduardoRJx"
              className='link'
              target="_blank" 
              rel="noopener noreferrer">
                  <img className='icon'
                    src={Github}
                    alt='github icon' />
            </a>
            <a href="https://www.linkedin.com/in/jeduardorjx/"
              className='link'
              target="_blank"
              rel="noopener noreferrer">
                <img className='icon icon-margin'
                  src={Linkedin}
                  alt='linkedin icon' />
            </a>
          </Fade>
        </div>
      
      </div>

    </section>
  );
}

export default Contact;